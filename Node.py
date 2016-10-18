class Node:
    def __init__(self, simbolo,esquerda = None,direita=None):
        self.__simbolo = simbolo
        self.__frequencia = 0
        self.__esquerda = esquerda
        self.__direita = direita

    def setChild(self, esquerda, direita):
        self.__esquerda = esquerda
        self.__direita = direita

    def ehFolha(self):
        return self.__esquerda is None and self.__direita is None

    def getFrequencia(self):
        return self.__frequencia

    def getSimbolo(self):
        return self.__simbolo

    def getEsquerda(self):
        return self.__esquerda

    def getDireita(self):
        return self.__direita

    def incrementar(self):
        self.__frequencia += 1

    def __str__(self):
        return u'Char {0:s} : Frequencia {1:d}'.format(self.__simbolo, self.__frequencia)

    def __lt__(self, no):
        return self.getFrequencia() < no.getFrequencia()

    def __eq__(self, no):
        return self.getFrequencia() == no.getFrequencia()

    def __gt__(self, v):
        return self.getFrequencia() > no.getFrequencia()

    def preencherMapa(self, dicioario, path):
        """

        :type dicioario: map
        """
        if self.ehFolha():
            dicionario[self.getSimbolo()] = path
            return
        self.preencheMapa(dicionario, path + "0" )
        self.preencheMapa(dicionario, path + "1")
