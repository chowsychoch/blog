(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{517:function(a,t,e){"use strict";e.r(t);var n=e(6),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("This article will discuss the set up process of virtual environment for Python with Conda, a package manager.")]),a._v(" "),e("h1",{attrs:{id:"what-is-virtual-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-virtual-environment"}},[a._v("#")]),a._v(" What is Virtual Environment?")]),a._v(" "),e("p",[a._v("Virtual Environment is not something related to remote computer. It does not require internet connection to let it run. You can think of each virtual environment created as a folder storing in a local machine. As a beginner of programming, most people would just download the language in local machine. And then to start to write the code and write it. You are developing a fantastic project with python version 3.8. For some time, when you want to switch to a project with older version python. The current version might not be compatible with it as some of the code runs on python 2 doesn't run on Python 3. Therefore, virtual environment came to use.")]),a._v(" "),e("h1",{attrs:{id:"why-we-need-virtual-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-we-need-virtual-environment"}},[a._v("#")]),a._v(" Why we need Virtual Environment?")]),a._v(" "),e("p",[a._v("Virtual environments keep packages in separate folder so you can switch between both applications easily and get them running. For example, package managers for other languages, like JavaScript’s NPM (Node Package Manager), take care of most of these details for you. this is not the case for Python, you have to set up environment yourself.")]),a._v(" "),e("h1",{attrs:{id:"how-to-set-up-conda-virtual-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-up-conda-virtual-environment"}},[a._v("#")]),a._v(" How to set up Conda Virtual Environment?")]),a._v(" "),e("p",[a._v("A number of ways can help setting up virtual environment. Conda, the package manager associated with Anaconda. This is a helpful tool in data analytics.")]),a._v(" "),e("ol",[e("li",[a._v("First, install Anaconda or miniconda installed.\nTo create a new Python virtual environment named PythonEnv with Python version 3.7 and to install packages run in shell:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda create --name PythonEnv "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("python")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.7")]),a._v(" numpy\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[a._v("Activate the new virtual environment:")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda activate PythonEnv\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("You can install your packages in virtual environment. The packages you installed will be saved in your virtual environment that you are running. For example, to make jupyter notebook run by a version of python in a virtual environment.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" jupyter notebook\n")])])]),e("p",[a._v("Remarks: Ensure to install a package version of jupyter notebook. And run it with  environment activated."),e("br"),a._v("\n4. To check list of already installed")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda list\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("Finish and quit")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda deactivate \n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[a._v("To export all packages installed with conda to a given file")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda list --export "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" PythonEnv.txt\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[a._v("To import from a text file")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda create --name PythonEnv2 --file PythonEnv.txt\n")])])]),e("ol",{attrs:{start:"8"}},[e("li",[a._v("To check all the conda environment.")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" list\n")])])]),e("disqus")],1)}),[],!1,null,null,null);t.default=s.exports}}]);