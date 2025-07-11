import matplotlib.pyplot as plt

def plot_metrics(history):
    plt.plot(history.history['accuracy'], label='Train Acc')
    plt.plot(history.history['val_accuracy'], label='Val Acc')
    plt.legend()
    plt.title("Accuracy")
    plt.show()

def save_model(model, path):
    model.save(path)
