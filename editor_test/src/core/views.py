# Editor JS Blueprint module

from flask import Blueprint, render_template, Response

core_bp = Blueprint(
    "core",
    __name__,
    template_folder="templates"
)


@core_bp.route("/")
def core() -> Response:
    """
    Renders the core.html template

    Returns:
        Response: Flask Response object
    """
    return render_template("core.html", title="EditorJS Test")
