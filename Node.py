class Node:
    def __init__(self,simbolo = ''):
        self.__simbolo = simbolo
        self.__frequencia = 0
        self.__esquerda = None
        self.__direita = None


    def setChild(self,esquerda,direita):
        self.__esquerda = esquerda
        self.__direita = direita

    def ehFolha(self):
        return self.esquerda is None and self.direita is None

    def getFrequencia(self):
        return self.frequencia

    def getSimbolo(self):
        return self.__simbolo

    def getEsquerda(self):
        return self.__esquerda

    def getDireita(self):
        return self.__direita


    def incrementar(self):
        self.__frequencia += 1

    def __str__(self):
        return ("Char %s : Frequencia %i"%(self.simbolo,self.frequencia))

    def __cmp__(self, other):
        # maior, menor ou igual
        if self.__frequencia > other.frequencia:
            return 1
        if self.__frequencia < other.frequencia:
            return -1
        else:
            return 0

    def preencherMapa(self, dicioario,caminho):
        if self.ehFolha():
            dicionario[self.getSimbolo()] = caminho
            return
        self.preencheMapa(dicionario,caminho + '0')
        self.preencheMapa(dicionario,caminho + '1')

