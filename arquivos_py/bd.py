class Usuario:
    def __init__(self, email, nome, senha):
        self.email = email
        self.nome = nome
        self.senha = senha
        
def register(mydb, email, nome, senha):
    mycursor = mydb.cursor()

    sql = "INSERT INTO registro_usuario (email, nome, senha) VALUES (%s, %s, %s)"
    val = (email, nome, senha)

    mycursor.execute(sql, val)

    mydb.commit()

    print("Usuário registrado com sucesso.")

    mycursor.close()


def login(mydb, email, senha):
    mycursor = mydb.cursor()

    sql = "SELECT * FROM registro_usuario WHERE email = %s AND senha = %s"
    val = (email, senha)

    mycursor.execute(sql, val)

    user = mycursor.fetchone()

    if user:
        print("Login bem-sucedido.")
        return user
    else:
        print("Credenciais inválidas.")
        return None