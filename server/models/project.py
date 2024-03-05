from config import db

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    deadline = db.Column(db.String)

    # Define relationship with users through the association table
    #collaborators = db.relationship('User', secondary='collaborator', backref='collaborating_projects')

    def __repr__(self):
        return f'<Project {self.project_name}>'
