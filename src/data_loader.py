from tensorflow.keras.preprocessing.image import ImageDataGenerator

def get_data(train_dir, val_dir, target_size=(224, 224), batch_size=32):
    train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.1,
    height_shift_range=0.1,
    shear_range=0.1,
    zoom_range=0.1,
    horizontal_flip=True,
    fill_mode='nearest')
    val_datagen = ImageDataGenerator(rescale=1./255)

    train_gen = train_datagen.flow_from_directory(train_dir, target_size=target_size, batch_size=batch_size, class_mode='categorical')
    val_gen = val_datagen.flow_from_directory(val_dir, target_size=target_size, batch_size=batch_size, class_mode='categorical')

    return train_gen, val_gen
