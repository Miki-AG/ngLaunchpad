import sys

from fabric.api import *
from fabric.colors import green, red, green, yellow
from fabric.contrib.files import exists
from fabric.contrib import *
from django.template import Template
import os
import layout_settings


#set_operating_system()


"""
Basic commands:
"""


def show_help():
    """

    help

    """
    print "\nfab jscomp|css|static"


def jscomp():
    local("ng-annotate -a StarterApp.js > StarterApp-Annotated.js")
    local("java -jar ~/bin/closure-compiler/compiler.jar StarterApp-Annotated.js > StarterApp-Compiled.js")


def css():
    local("java -jar ~/bin/closure-compiler/closure-stylesheets-20111230.jar local.css -o local.min.css")


def build():
    print "rendering..."

    local("rm -rf ./build")
    local("mkdir ./build")

    local("cp -a ./base/. ./build")
    local("cp -a ./dev/. ./build")
    local_template_render('./base/ng/app/templates/index.tpl.html',
        './index.html', layout_settings.load_base_configuration())


def startserverlocal():
    print "Starting local..."
    local("python -m SimpleHTTPServer 4000 > temp.log &")
    local("open -a '/Applications/Google Chrome.app' http://localhost:4000/#/")
    print "\nstarting server in http://localhost:4000/"


def startserverlocalcomp():
    local("rm -rf %s/%s" % ('.', 'temp'))
    local("mkdir %s/%s" % ('.', 'temp'))
    local("rm -rf %s/%s" % ('.', 'build'))
    local("mkdir %s/%s" % ('.', 'build'))

    print "Annotating JS..."
    local("ng-annotate -a ./bin/ng/FwApp.js > ./temp/ng/FwApp-Annotated.js")
    local("ng-annotate -a ./work/ng/WorkApp.js > ./temp/ng/WorkApp-Annotated.js")

    print "Compiling fw JS..."
    local("java -jar ~/bin/closure-compiler/compiler.jar ./temp/ng/FwApp-Annotated.js > ./build/ng/FwApp-Compiled.js")
    local("java -jar ~/bin/closure-compiler/compiler.jar ./temp/ng/WorkApp-Annotated.js > ./build/ng/WorkApp-Compiled.js")

    print "Compiling CSS..."
    local("java -jar ~/bin/closure-compiler/closure-stylesheets-20111230.jar ./bin/css/local.css -o ./build/css/local.min.css")



    print "Starting..."

def stopserver():
    print "Stopping..."
    local("lsof -P | grep ':4000' | awk '{print $2}' | xargs kill -9")


def static():
    css()
    jscomp()
    stopserver()
    startserverlocal()


def local_template_render(source_file, dest_file, params):
    with open(source_file, 'r') as source:
        rendered = source.read().format(**params)
        with open(dest_file, 'w') as dest:
            dest.write(rendered)



