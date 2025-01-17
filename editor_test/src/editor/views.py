# Editor JS Blueprint module

from flask import Blueprint, render_template, Response

editor_bp = Blueprint(
    "editor",
    __name__,
    template_folder="templates"
)


@editor_bp.route("/editor")
def editor() -> Response:
    """
    Renders the editor.html template

    Returns:
        Response: Flask Response object
    """
    return render_template("editor.html", title="EditorJS Test")
