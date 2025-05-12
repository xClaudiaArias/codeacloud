import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'My first Blog',
      author: "Claudia Arias",
      summary: 'He is the full content of my blog',
      content: "Hi there",
      date: new Date().toISOString()
    }
  ]

  getBlogs(): Blog[] {
    return this.blogs
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(blog => blog.id === id)
  }

  addBlog(blog: Blog): void {
    blog.id = this.blogs.length + 1
    blog.date = new Date().toISOString()
    this.blogs.push(blog)
  }

  updateBlog(id: number, updatedBlog: Blog): void {
    const index = this.blogs.findIndex(blog => blog.id === id)

    if (index !== -1) {
      this.blogs[index] = {...updatedBlog, id, date: this.blogs[index].date}
    }

  }

  deleteBlog(id: number): void {
    this.blogs = this.blogs.filter(blog => blog.id !== id)
  }

}
