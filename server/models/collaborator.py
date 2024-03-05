from config import db

class Collaborator(db.Model):
    __tablename__ = 'collaborators'

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), primary_key=True)
    
    def __repr__(self):
        return f'<Collaborator(user_id={self.user_id}, project_id={self.project_id})>' 