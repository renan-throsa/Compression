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
            pai     = Node.setChild(esquerda,direita)
            if Queue.empty():
                return pai
            else:
                Queue.append(pai)
                Queue.sort()
