const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'switchnext.db'), (err) => {
    if (err) {
        console.error('Database opening error', err);
    } else {
        console.log('Connected to SQLite database.');
    }
});

module.exports = db;

// Creating the DB columns - this code won't overwrite the columns everything the server starts.
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS ContactSubmissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      category_id INTEGER,
      popularity_score INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      image_url TEXT,
      FOREIGN KEY (category_id) REFERENCES Categories(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Instructors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      bio TEXT,
      contact TEXT,
      image_url TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      event_date DATE NOT NULL,
      type TEXT,
      image_url TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      job_title TEXT, 
      message TEXT NOT NULL,
      image_url TEXT
    )
  `);
}); 
