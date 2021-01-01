
# My personal blog and site

This is my CV site and my personal blog. If you like the items, please leave a star.

## My PyCV

Save the content below in a python file (example, _gu.py_) and run it to read it correctly (`python3 gu.py`).

```python
class PrintColor:
    """
    Class for print string in color
    """
    PURPLE = '\033[95m'
    CYAN = '\033[96m'
    DARKCYAN = '\033[36m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    END = '\033[0m'

# Generality
name = "Matteo"
surname = "Guadrini"
friendly_name = "GU"
real_job = "Python developer"
job_title = "DevOps"
my_blog = "https://matteoguadrini.github.io"
my_site = "https://matteoguadrini.github.io/about"
magic_number = 42

print("Welcome to my personal site!")
print("CV site: ", end='')
print(PrintColor.DARKCYAN + "{0}".format(my_site) + PrintColor.END)
print("Blog site: ", end='')
print(PrintColor.CYAN + "{0}".format(my_blog) + PrintColor.END)
print("###############################")
print("My name is ", end='')
print(PrintColor.GREEN + "{0} {1}".format(name, surname) + PrintColor.END)
print("but for my friends ", end='')
print(PrintColor.RED + "{0}".format(friendly_name) + PrintColor.END)
print("I'm a ", end='')
print(PrintColor.BLUE + "{0}".format(job_title) + PrintColor.END)
print("but my passion and principal job is ", end='')
print(PrintColor.YELLOW + "{0}".format(real_job) + PrintColor.END)
print("###############################")
print("Answer to the fundamental question about life, the universe and everything is ", end='')
print(PrintColor.PURPLE + "{0}".format(magic_number) + PrintColor.END)
```