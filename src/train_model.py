import os
from build_model import build_model
from data_loader import get_data
from utils import plot_metrics, save_model
from tensorflow.keras.callbacks import EarlyStopping, ReduceLROnPlateau


# Paths
train_dir = "wheat_dataset/train"
val_dir = "wheat_dataset/valid"
model_save_path = "saved_models/wheat_model.keras"

# Load data
train_gen, val_gen = get_data(train_dir, val_dir)
print("Train classes:", train_gen.class_indices)
print("Detected number of classes:", train_gen.num_classes)


# Build model
model = build_model(num_classes=train_gen.num_classes)
model.summary()

early_stop = EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)
#reduce_lr = ReduceLROnPlateau(monitor='val_loss', factor=0.2, patience=3, min_lr=1e-6)

# Train
history = model.fit(
    train_gen,
    epochs=20,
    validation_data=val_gen,
    callbacks=[early_stop]
)

# Save model
save_model(model, model_save_path)

# Plot
plot_metrics(history)
