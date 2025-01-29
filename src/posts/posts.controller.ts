import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postservice: PostsService) { }

    @Get()
    getAllPosts() {
        return this.postservice.getAllPosts();
    }

    @Post()
    createPost(@Body() post: any) {
        return this.postservice.addPost(post);
    }
}
