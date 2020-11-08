class Main:
    def __init__(self):
        self.__huffman = Huffman()

    def executar(self):
        print("*********Codigo de Huffman*********")
        while (True):
            string = input(str("Cole ou digite 'lotr' ou deixe em branco para parar: "))
            if len(string) == 0:
                print("Adeus!")
                return

            if (string == "lotr" ):
                    texto ="""three rings for the elven-kings under the sky
                            seven for the dwarf-lords in their halls of stone
                            nine for mortal men doomed to die
                            one for the dark lord on his dark throne
                            in the land of mordor where the shadows lie
                            one ring to rule them all, one ring to find them
                            one ring to bring them all, and in the darkness bind them
                            in the land of mordor where the shadows lie"""

            print(texto)
            print("Tamanho Normal: %i"%(len(texto)*8))#pois ca letra ocupa 1 byte
            data = self.__huffman.codificarTexto(texto)
            print("Tamanho Comprimido: %i" % len(data))
            print ("Taxa de compressão %i por cento"%(100.0*(len(data)/(len(texto)*8))))
            print("Texto Codificado: ")
            print(data)
            print("Texto decodificado: ")
            texto = self.__huffman.decodificarTexto(data)
            print(texto)
            print("Dicionario: ")
            self.__huffman.imprimirDicionario()


main = Main()
main.executar()
