from config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates


class Task(db.Model,SerializerMixin):
    __tablename__ = 'tasks'
    serialize_rules = ('-project','-user', )

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    due_date = db.Column(db.String, nullable=False)
    priority = db.Column(db.String(20), default='medium')  # Priority can be 'low', 'medium', 'high'
    progress = db.Column(db.Integer, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
    
    @validates('priority')
    def validate_priority(self, key, value):
        if value not in ['low', 'medium', 'high']:
            raise ValueError("Priority must be 'low', 'medium', or 'high'")
        return value

    @validates('progress')
    def validate_progress(self, key, value):
        if not 0 <= value <= 100:
            raise ValueError("Progress must be between 0 and 100")
        return value
    def __repr__(self):
        return f'<Task {self.title}>'
