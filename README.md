
# **QUEFLIX**

Find out where to stream your favorite movies and TV shows!

# **Summary**
A web app for managing your movie watchlist with:

Add/remove movies

Edit movie details

Google Analytics tracking

MongoDB database backend

# **What you need**

Node.js (v16+)

MongoDB

Google Analytics ID 

See env. file! <3

# **SET UP**

Local testing: Just install MongoDB and run mongod

No remote DB config needed (uses localhost)


**Install Dependencies:**
npm install


**Configure environment:**
See .env file


**Start App**
node server.js


# **Accessibility (A11y) & SEO** 

Keyboard navigation supported for all actions

ARIA labels on interactive elements

Semantic HTML (proper heading hierarchy, landmarks)

Responsive design works on mobile/desktop

OpenGraph meta tags for social sharing

# **Tracking**

Google Analytics 4 tracks:

Page views

Watchlist additions/removals

Privacy measures:

IP anonymization enabled

No personal data collected

Consent check before tracking

# **Security**
Protected Against:
XSS (Cross-Site Scripting)

User input sanitized with DOM escaping

React's built-in XSS protection

Database Injection

MongoDB queries use parameterized methods

No raw user input in queries


## Database Setup

This project uses a **local MongoDB database**. To run it:

1. **Install MongoDB Community Edition** (if not already installed):
   - [Download for Windows/macOS/Linux](https://www.mongodb.com/try/download/community)
   - Follow the default installation steps.

2. **Start MongoDB**:
   - On macOS/Linux, run:
     ```bash
     mongod
     ```
   - On Windows, MongoDB usually starts automatically as a service after installation.

3. **Verify it works**:
   - The database URI in `.env` points to:
     ```
     mongodb://localhost:27017/movies
     ```
   - MongoDB will automatically create the `movies` database when you first insert data.


## **About the Project**

In this group project, we created a platform where you can search for movies and TV shows, add them to your favorites list, edit, and get information on where to stream them.

## **Features**

✅ **Search for Movies & TV Shows** – Find what you want to watch.

✅ **Get Streaming Links** – Click the arrow directly to the streaming platform.

✅ **View Details** – See the title before watching.

✅ **Save to Your Watchlist** – Click the heart to add movies and series to your list.

✅ **Edit or write in the tile** – Allowing users to give their saved movies/TV shows a more personal touch and it get updated if you search for that movie again.

✅ **Manage Your List** – Remove items or get the streaming link with one click.

---

## **Pages**

### **1️⃣ Search Page**

On the first page, you’ll find a search bar where you can type the name of a movie or TV show.

- Click the **arrow** to get a direct link to the streaming platform.
- See **basic details** such as the title and if it is a TV show or movie.
- Click the **heart** to add it to your watchlist.

### **2️⃣ Watchlist Page**

This is where all your saved movies and series will be stored.

- Edit the title or write something by clicking on the **pencil**.
- Click the **arrow** to get a direct streaming link.
- **Delete** items from your list when you're done watching by clicking on the X.

---

## **How to Use QUEFLIX**

1️⃣ Search for a movie or TV show.

2️⃣ Click the **arrow** to get streaming information.

3️⃣ Save it by clicking the **heart**.

4️⃣ Visit your **watchlist** to manage your saved content.

---

### 🚀 **Happy Watching!**
<3