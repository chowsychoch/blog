---
title: Creating Virtual Environment for Python with Conda
date: 2021-01-21
categories:
 - Note
tags:
 - Python
 - Virtual Environment
 - Conda
---

This article will discuss the set up process of virtual environment for Python with Conda, a package manager.

<!-- more -->
# What is Virtual Environment? 
Virtual Environment is not something related to remote computer. It does not require internet connection to let it run. You can think of each virtual environment created as a folder storing in a local machine. As a beginner of programming, most people would just download the language in local machine. And then to start to write the code and write it. You are developing a fantastic project with python version 3.8. For some time, when you want to switch to a project with older version python. The current version might not be compatible with it as some of the code runs on python 2 doesn't run on Python 3. Therefore, virtual environment came to use. 

# Why we need Virtual Environment? 
Virtual environments keep packages in separate folder so you can switch between both applications easily and get them running. For example, package managers for other languages, like JavaScript’s NPM (Node Package Manager), take care of most of these details for you. this is not the case for Python, you have to set up environment yourself. 

# How to set up Conda Virtual Environment? 
A number of ways can help setting up virtual environment. Conda, the package manager associated with Anaconda. This is a helpful tool in data analytics. 

1. First, install Anaconda or miniconda installed. 
To create a new Python virtual environment named PythonEnv with Python version 3.7 and to install packages run in shell:
```bash
conda create --name PythonEnv python=3.7 numpy
```
2. Activate the new virtual environment:
```bash
conda activate PythonEnv
```
3. You can install your packages in virtual environment. The packages you installed will be saved in your virtual environment that you are running. For example, to make jupyter notebook run by a version of python in a virtual environment. 
```bash
conda install jupyter notebook
```
Remarks: Ensure to install a package version of jupyter notebook. And run it with  environment activated.  
4. To check list of already installed 
```bash
conda list
```
5. Finish and quit
```bash
conda deactivate 
```
6. To export all packages installed with conda to a given file
```bash
conda list --export > PythonEnv.txt
```

7. To import from a text file 
```bash
conda create --name PythonEnv2 --file PythonEnv.txt
```

8. To check all the conda environment.
```bash
conda env list
```

<disqus/>