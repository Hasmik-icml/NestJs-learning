import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostsService {
    // constructor(private readonly userService: UserService) {}
    private posts = [];

    getAllPosts() {
        return this.posts;
    }

    addPost(post: any) {
        this.posts.push(post);
        return {message: "Post created"}
    }
}
