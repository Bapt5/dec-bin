#programme en python
var b=str("")
var d=int(input("entrez un nombre decimal entier"))

while(d!=0):
    rd=d%2
    b=str(rd)+b
    d=d//2
print ("votre nombre decimal s'ecrit",b,"en binaire")
