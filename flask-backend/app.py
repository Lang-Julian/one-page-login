from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api, Resource

app = Flask(__name__)
CORS(app)
api = Api(app)

users = []  # Diese Liste speichert die Benutzer während der Laufzeit

class Register(Resource):
    def post(self):
        data = request.json
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        
        # Überprüfen, ob alle Felder ausgefüllt sind
        if not username or not email or not password:
            return jsonify({"message": "Alle Felder müssen ausgefüllt sein"}), 400
        
        # Benutzer hinzufügen (keine Persistenz)
        user = {"username": username, "email": email, "password": password}
        users.append(user)
        return jsonify({"message": "Registrierung erfolgreich", "user": user})


class Login(Resource):
    def post(self):
        data = request.json
        username = data.get('username')
        password = data.get('password')

        # Überprüfen, ob alle Felder ausgefüllt sind
        if not username or not password:
            return jsonify({"message": "Benutzername und Passwort müssen ausgefüllt sein"}), 400

        # Benutzer überprüfen
        for user in users:
            if user['username'] == username and user['password'] == password:
                return jsonify({"message": "Login erfolgreich"})
        return jsonify({"message": "Ungültige Anmeldedaten"}), 401


# API-Routen definieren
api.add_resource(Register, '/api/register')
api.add_resource(Login, '/api/login')

if __name__ == '__main__':
    app.run(debug=True)