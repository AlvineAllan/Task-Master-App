from datetime import datetime
from config import db 


class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    due_date = db.Column(db.DateTime, default=datetime.utcnow)  # Specify data type as db.DateTime
    status = db.Column(db.String(20), default='upcoming')  # upcoming, overdue, completed

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comments = db.relationship('Comment', backref='task', lazy=True)

    def __repr__(self):
        return f'<Task {self.title}>'
