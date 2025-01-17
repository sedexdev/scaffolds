# Flask main module

from flask import Flask

from src.core.views import core_bp
from src.editor.views import editor_bp


def create_app() -> Flask:
    """
    Intialise and return a Flask instance

    Returns:
        Flask: app instance
    """
    app = Flask(__name__)

    app.register_blueprint(core_bp)
    app.register_blueprint(editor_bp)

    return app
