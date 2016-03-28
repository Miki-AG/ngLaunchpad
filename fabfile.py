import sys

from fabric.api import *
from fabric.colors import green, red, green, yellow
from fabric.contrib.files import exists
from fabric.contrib import *
import os


"""
Basic commands:
"""


def startproject(project_name, project_path, site_type="basic", ngm_version="v0.1"):
    """
    Usage:
    fab
    project_name: project_name of the project.
    path: path to the project.
    """
    local("rm -rf %s/%s" % (project_path, project_name))
    local("mkdir %s/%s" % (project_path, project_name))

    clone_files(ngm_version, site_type, project_path, project_name)
    create_properties(ngm_version, site_type, project_path, project_name)


def clone_files(ngm_version, site_type, project_path, project_name):
    """
    ngM_version: version
    site_type: site_type
    project_path: path
    project_name: project_name
    """
    # Common files to all types of websites
    #local("cp -a ./fw_core/%s/project_templates/ %s/%s"%(ngm_version, project_path, project_name))

    # Specific templates:
    #   default basic
    #   dinamic with user management
    #   master/detail flow, etc
    local("cp -a ./%s/layouts/%s/. %s/%s" %
          (ngm_version, site_type, project_path, project_name))

    local("cp -a ./%s/base/lib/. %s/%s/ng/lib" %
          (ngm_version, project_path, project_name))

    local("cp -a ./%s/base/fabfile.py %s/%s" %
          (ngm_version, project_path, project_name))

    local("cp -a ./ext/. %s/%s/ng/ext" %
          (project_path, project_name))

    local("cp -a ./%s/base/themes/. %s/%s/ng/themes" %
          (ngm_version, project_path, project_name))


def create_properties(ngm_version, site_type, project_path, project_name):
    """
    ngm_version: ngm_version
    site_type: site_type
    project_path: path
    project_name: project_name
    """
    source_file = '%s/%s/layout_settings.tpl.py'%(project_path, project_name)
    dest_file = '%s/%s/layout_settings.py'%(project_path, project_name)

    params = {
        'open_braket': '{',
        'close_braket': '}',

        'project_name': project_name,
        'ngm_version': ngm_version,
        'site_type': site_type,
        'project_path': os.path.abspath(project_path)
    }
    with open(source_file, 'r') as source:
        rendered = source.read().format(**params)
        with open(dest_file, 'w') as dest:
            dest.write(rendered)

