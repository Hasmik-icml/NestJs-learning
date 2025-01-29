import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    private posts = [];

    getAllPosts() {
        return this.posts;
    }

    addPost(post: any) {
        this.posts.push(post);
        return {message: "Post created"}
    }
}
