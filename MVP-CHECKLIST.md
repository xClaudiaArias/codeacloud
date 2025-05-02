# 📝 Personal Blog MVP Checklist

## 📁 Project Setup
- [x] Initialize Angular project (`ng new`)
- [x] Set up Git and initial commit
- [x] Add routing module (`--routing`)
- [x] Choose SCSS or CSS styling
- [x] Generate core pages and services

## 🚦 Routing & Navigation
- [ ] Set up routes for all public and private pages
- [ ] Add a navigation menu to switch between pages

## 🔓 Authentication
- [ ] Create a simple `AuthService` with mock login
- [ ] Build the `LoginComponent` with a login form
- [ ] Protect dashboard route with `AuthGuard`
- [ ] Add logout functionality

## 🏡 Public Pages
- [ ] Home Page – display welcome message and latest blog
- [ ] Blogs Page – list all blog posts
- [ ] Blog Detail Page – view individual blog post by ID
- [ ] About Me Page – show your background
- [ ] Contact Page – basic form (non-functional is okay for MVP)

## ✍️ Admin Dashboard (Blog Editor)
- [ ] Create a DashboardComponent
- [ ] Build blog form (title, summary, content)
- [ ] List existing blog posts with Edit/Delete options
- [ ] Connect the dashboard to a BlogService (local storage or in-memory array for MVP)

## 🧠 Bonus 
- [ ] Persist blog data using `localStorage`
- [ ] Use reactive forms
- [ ] Add route transition animations
- [ ] Add tags or categories
- [ ] Add markdown support in blog content
