class Huffman:
    def __init__(self):
        self.__raiz = Node();

    def contarFrequencias(self,texto):
        dicionario = {}
        Queue = []
        for ch in txt:
            if ch not in dicionario: # se a chave 'ch' não esta no dicionario
                dicionario[ch] = Node(ch)
                Queue.append(dicionario[ch])
                dicionario[ch].incrementar()
            else:
                dicionario[ch].incrementar()

        return Queue

    def criarArvore(self,Queue):
        while (True):
            esquerda = Queue.pop() #Node com menor frequencia
            direita = Queue.pop()
            pai = Node('Null', esquerda, direita)
            if len(Queue) is 0:
                return pai
            else:
                Queue.append(pai)
                Queue.sort()

    def criarDicionario(self):
        dicionario = {}
        path = ""
        raiz.preencherMapa(dicionario, path )
        return dicionario

    def codificarTexto(self,texto):
        self.__raiz = self.criarArvore(self.contarFrequencias(texto))
        dicionario = self.criarDicionario()

        data = []
        for ch in texto:
            print(dicionario.get(ch))
            data.append(dicionario.get(ch))#data contém código compostos de 0's e 1's
            print(dicionario.get(ch)) #imprime o códido de Huffman
        return data


    def decodificarTexto(self, data):
        atual = self.__raiz
        for ch in data:
            if ch is '0': #vou pra esquerda?
                atual = atual.getEsquerda();
            else:
                atual = atual.getDireita()
            if atual.ehFolha():
                print(atual.getSimbolo())
                atual = self.__raiz

    def inOrder(self,raiz):
        if raiz is not None:
            inOrder(raiz.getEsquerda())
            if raiz.ehFolha(): # apenas as folhras contém simbolos válidos!
                print(raiz)
            inOrder(raiz.getDireita())

    def imprimirDicionario(self):
        dicionario = self.criarDicionario()
        print(dicionario)
