from docutils import nodes
from docutils.parsers.rst import directives
from docutils.parsers.rst import Directive

def setup(app):
    app.add_javascript("speedtype.js")
    return {'version': '0.1'}

# class SpeedTypeNode(nodes.General, nodes.Element):
#     pass
#
# def visit_st_node(self, node):
#     #todo
#     pass
#
# def depart_st_node(self, node):
#     #todo
#     pass
#
# def process_st_node(app, env, docname):
#     pass
#
# def purge_st(app, env, docname):
#     pass
#
# class SpeedTypeDirective(Directive):
#     pass
