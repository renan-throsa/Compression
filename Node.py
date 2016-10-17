class Node:
    def __init__(self,simbolo):
        self.simbolo = ''
        self.frequencia = 0

    def __init__(self,esquerda,direita):
        self.simbolo = '+'
        self.esquerda = esquerda
        self.direita = direita

    def ehFolha(self):
        return self.esquerda is None and self.direita is None

    def getFrequencia(self):
        return self.frequencia

    def getSimbolo(self):
        return self.simbolo

    def getEsquerda(self):
        return self.esquerda

    def getDireita(self):
        return self.direita


    def incrementa(self):
        self.frequencia += 1

    def __str__(self):
        return ("Char %s : Frequencia %i"%(self.simbolo,self.frequencia))

    def __cmp__(self, other):
        # maior, menor ou igual
        if self.frequencia > other.frequencia:
            return 1
        if self.frequencia < other.frequencia:
            return -1
        else:
            return 0

    def preencheMapa(self, dicioario,caminho):
        if self.ehFolha():
            dicionario[self.getSimbolo()] = caminho
            return
        self.preencheMapa(dicionario,caminho + '0')
        self.preencheMapa(dicionario,caminho + '1')









