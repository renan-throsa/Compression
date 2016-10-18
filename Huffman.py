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
        while(True):
            esquerda   = Queue.pop() #node com menor frequencia
            direita = Queue.pop()
            pai = Node() #novo nó
            pai.setChild(esquerda,direita)
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
            data.append(dicionario.get(ch))


    def decodificarTexto(self, data):
        aux = self.__raiz
        for ch in 
