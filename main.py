from website import create_app
app = create_app()
if __name__ == "__main__": # This means I will just run when this is True, not whenever I import main.py
    app.run(debug = True)