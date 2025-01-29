import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { UserService } from 'src/user/user.service';

@Controller('posts')
export class PostsController {
    // constructor(private postservice: PostsService) { }
    constructor(private userService: UserService) { }

    @Get()
    getAllPosts() {
        return this.userService.getAllUsers();
    }

    @Post()
    createPost(@Body() post: any) {
        // return this.postservice.addPost(post);
    }
}
