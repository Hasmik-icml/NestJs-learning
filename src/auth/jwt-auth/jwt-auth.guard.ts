import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

/**
 * Needed because Express's Request type doesn't include these by default,
 * but our authentication flow requires them.
 */
export interface AuthenticatedRequest extends Request {
  headers: { authorization: string };
  user: any;  // TODO: Replace 'any' with a proper User type interface/model when defined
}

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token provided');
    }
    const token = authHeader.split(' ')[1];

    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token')
    }
    return true;
  }
}
