# 图像分类模型部署# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1.# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rot# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    ## 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    ## 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3),# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') /# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) ==# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15,# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples +# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    ## 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, S# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut =# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x =# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = Global# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters //# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3.# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    Learning# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch ># 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRate# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPl# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 -# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_c# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    ## 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.Constant# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pr# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tfl# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self,# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5,# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.Gradient# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_p# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        train# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, train# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4.# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.on# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, np.argmax(predictions[0])]
    
    grads = tape.gradient(l# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, np.argmax(predictions[0])]
    
    grads = tape.gradient(loss, conv_outputs)
    
    # 全局平均池化梯度
    pooled_grads# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, np.argmax(predictions[0])]
    
    grads = tape.gradient(loss, conv_outputs)
    
    # 全局平均池化梯度
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    
# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, np.argmax(predictions[0])]
    
    grads = tape.gradient(loss, conv_outputs)
    
    # 全局平均池化梯度
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    
    # 加权求和
    conv_outputs = conv_outputs[0]
    heatmap# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, np.argmax(predictions[0])]
    
    grads = tape.gradient(loss, conv_outputs)
    
    # 全局平均池化梯度
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    
    # 加权求和
    conv_outputs = conv_outputs[0]
    heatmap = conv_outputs @ pooled_grads[..., tf.newaxis]
    heatmap = tf# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, np.argmax(predictions[0])]
    
    grads = tape.gradient(loss, conv_outputs)
    
    # 全局平均池化梯度
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    
    # 加权求和
    conv_outputs = conv_outputs[0]
    heatmap = conv_outputs @ pooled_grads[..., tf.newaxis]
    heatmap = tf.squeeze(heatmap)
    
    # 归一化
    heatmap = tf.maximum# 图像分类模型部署项目练习

## 练习一：数据增强与预处理

### 任务
1. 实现多种数据增强技术
2. 尝试不同的图像预处理方法
3. 创建自定义数据集加载器
4. 可视化数据增强效果

### 提示代码
```python
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import albumentations as A
import cv2
import numpy as np
import matplotlib.pyplot as plt

# 1. Keras数据增强
def keras_data_augmentation():
    datagen = ImageDataGenerator(
        rotation_range=15,
        width_shift_range=0.1,
        height_shift_range=0.1,
        zoom_range=0.1,
        shear_range=0.1,
        horizontal_flip=False,
        fill_mode='nearest'
    )
    return datagen

# 2. Albumentations数据增强
def albumentations_augmentation():
    transform = A.Compose([
        A.Rotate(limit=15, p=0.5),
        A.ShiftScaleRotate(shift_limit=0.1, scale_limit=0.1, rotate_limit=15, p=0.5),
        A.RandomBrightnessContrast(brightness_limit=0.2, contrast_limit=0.2, p=0.5),
        A.GaussNoise(var_limit=(10.0, 50.0), p=0.3),
        A.ElasticTransform(alpha=1, sigma=50, alpha_affine=50, p=0.3),
    ])
    return transform

# 3. 自定义预处理
def custom_preprocessing(image, target_size=(28, 28)):
    # 调整大小
    if image.shape[:2] != target_size:
        image = cv2.resize(image, target_size)
    
    # 去噪
    image = cv2.GaussianBlur(image, (3, 3), 0)
    
    # 对比度增强
    image = cv2.equalizeHist(image)
    
    # 归一化
    image = image.astype('float32') / 255.0
    
    # 增加通道维度
    if len(image.shape) == 2:
        image = np.expand_dims(image, axis=-1)
    
    return image

# 4. 可视化数据增强效果
def visualize_augmentation(original_image, transform, n_samples=5):
    plt.figure(figsize=(15, 3))
    
    # 原图
    plt.subplot(1, n_samples + 1, 1)
    plt.imshow(original_image.squeeze(), cmap='gray')
    plt.title('Original')
    plt.axis('off')
    
    # 增强后的图
    for i in range(n_samples):
        augmented = transform(image=original_image)['image']
        plt.subplot(1, n_samples + 1, i + 2)
        plt.imshow(augmented.squeeze(), cmap='gray')
        plt.title(f'Augmented {i + 1}')
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()
```

---

## 练习二：模型架构优化

### 任务
1. 尝试不同的CNN架构
2. 实现残差连接（ResNet）
3. 添加注意力机制
4. 实验不同的激活函数和优化器

### 提示代码
```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import (
    Input, Conv2D, BatchNormalization, Activation, 
    MaxPooling2D, GlobalAveragePooling2D, Dense, 
    Add, Multiply, Reshape
)
from tensorflow.keras.optimizers import Adam, SGD, RMSprop

# 1. 简单的ResNet块
def residual_block(x, filters, kernel_size=3, stride=1):
    shortcut = x
    
    # 主路径
    x = Conv2D(filters, kernel_size, strides=stride, padding='same')(x)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    x = Conv2D(filters, kernel_size, strides=1, padding='same')(x)
    x = BatchNormalization()(x)
    
    # 快捷连接
    if stride != 1 or shortcut.shape[-1] != filters:
        shortcut = Conv2D(filters, 1, strides=stride, padding='same')(shortcut)
        shortcut = BatchNormalization()(shortcut)
    
    # 相加
    x = Add()([x, shortcut])
    x = Activation('relu')(x)
    
    return x

# 2. SE注意力模块
def se_block(x, reduction=16):
    filters = x.shape[-1]
    
    # Squeeze
    se = GlobalAveragePooling2D()(x)
    se = Reshape((1, 1, filters))(se)
    
    # Excitation
    se = Dense(filters // reduction, activation='relu')(se)
    se = Dense(filters, activation='sigmoid')(se)
    
    # Scale
    x = Multiply()([x, se])
    
    return x

# 3. 构建优化的CNN
def build_optimized_cnn(input_shape=(28, 28, 1), num_classes=10):
    inputs = Input(shape=input_shape)
    
    # 初始卷积
    x = Conv2D(64, 3, padding='same')(inputs)
    x = BatchNormalization()(x)
    x = Activation('relu')(x)
    
    # 残差块 + SE
    x = residual_block(x, 64)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    x = residual_block(x, 128)
    x = se_block(x)
    x = MaxPooling2D(2)(x)
    
    # 分类头
    x = GlobalAveragePooling2D()(x)
    x = Dense(256, activation='relu')(x)
    outputs = Dense(num_classes, activation='softmax')(x)
    
    model = Model(inputs=inputs, outputs=outputs)
    return model

# 4. 不同优化器实验
optimizers = {
    'adam': Adam(learning_rate=0.001),
    'sgd': SGD(learning_rate=0.01, momentum=0.9),
    'rmsprop': RMSprop(learning_rate=0.001)
}
```

---

## 练习三：训练策略优化

### 任务
1. 实现学习率调度
2. 添加早停和模型检查点
3. 实验不同的损失函数
4. 实现混合精度训练

### 提示代码
```python
from tensorflow.keras.callbacks import (
    ReduceLROnPlateau, EarlyStopping, ModelCheckpoint,
    LearningRateScheduler
)
import tensorflow as tf

# 1. 学习率调度
def lr_schedule(epoch):
    lr = 0.001
    if epoch > 30:
        lr *= 0.5e-3
    elif epoch > 20:
        lr *= 1e-3
    elif epoch > 10:
        lr *= 1e-2
    elif epoch > 5:
        lr *= 1e-1
    return lr

lr_scheduler = LearningRateScheduler(lr_schedule, verbose=1)

reduce_lr = ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.5,
    patience=5,
    min_lr=1e-7,
    verbose=1
)

# 2. 训练回调
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=10,
    restore_best_weights=True,
    verbose=1
)

model_checkpoint = ModelCheckpoint(
    'best_model.h5',
    monitor='val_accuracy',
    save_best_only=True,
    mode='max',
    verbose=1
)

callbacks = [early_stopping, model_checkpoint, reduce_lr]

# 3. 标签平滑损失
def label_smoothing_loss(y_true, y_pred, smoothing=0.1):
    num_classes = y_true.shape[-1]
    y_true = y_true * (1 - smoothing) + smoothing / num_classes
    return tf.keras.losses.categorical_crossentropy(y_true, y_pred)

# 4. 混合精度训练
from tensorflow.keras import mixed_precision

policy = mixed_precision.Policy('mixed_float16')
mixed_precision.set_global_policy(policy)

# 使用时在模型编译后添加
model.compile(
    optimizer='adam',
    loss=label_smoothing_loss,
    metrics=['accuracy']
)
```

---

## 练习四：模型压缩与优化

### 任务
1. 实现模型剪枝
2. 进行权重量化
3. 知识蒸馏
4. 导出为不同格式

### 提示代码
```python
import tensorflow_model_optimization as tfmot
import tensorflow as tf

# 1. 模型剪枝
def apply_pruning(model):
    prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude
    
    # 定义剪枝调度
    pruning_schedule = tfmot.sparsity.keras.ConstantSparsity(
        target_sparsity=0.5,
        begin_step=0,
        frequency=100
    )
    
    # 应用剪枝
    model_for_pruning = prune_low_magnitude(model, pruning_schedule=pruning_schedule)
    
    return model_for_pruning

# 2. 训练后量化
def post_training_quantization(model):
    converter = tf.lite.TFLiteConverter.from_keras_model(model)
    
    # 动态范围量化
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    
    tflite_model = converter.convert()
    
    with open('model_quantized.tflite', 'wb') as f:
        f.write(tflite_model)
    
    return tflite_model

# 3. 知识蒸馏
class Distiller(tf.keras.Model):
    def __init__(self, student, teacher):
        super().__init__()
        self.student = student
        self.teacher = teacher
    
    def compile(self, optimizer, loss, metrics, temperature=5, alpha=0.1):
        super().compile(optimizer=optimizer, metrics=metrics)
        self.student_loss_fn = loss
        self.distillation_loss_fn = tf.keras.losses.KLDivergence()
        self.temperature = temperature
        self.alpha = alpha
    
    def train_step(self, data):
        x, y = data
        
        teacher_predictions = self.teacher(x, training=False)
        
        with tf.GradientTape() as tape:
            student_predictions = self.student(x, training=True)
            
            student_loss = self.student_loss_fn(y, student_predictions)
            distillation_loss = self.distillation_loss_fn(
                tf.nn.softmax(teacher_predictions / self.temperature, axis=1),
                tf.nn.softmax(student_predictions / self.temperature, axis=1)
            )
            
            loss = self.alpha * student_loss + (1 - self.alpha) * distillation_loss
        
        trainable_vars = self.student.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        
        self.compiled_metrics.update_state(y, student_predictions)
        return {m.name: m.result() for m in self.metrics}

# 4. 导出为不同格式
def export_model(model):
    # SavedModel格式
    model.save('saved_model')
    
    # ONNX格式
    import tf2onnx
    import onnx
    
    input_signature = [tf.TensorSpec(model.inputs[0].shape, model.inputs[0].dtype, name='input')]
    onnx_model, _ = tf2onnx.convert.from_keras(model, input_signature=input_signature, opset=13)
    onnx.save(onnx_model, 'model.onnx')
```

---

## 练习五：模型解释与可视化

### 任务
1. 实现类激活映射（CAM）
2. 使用SHAP值解释预测
3. 可视化中间层特征
4. 分析混淆矩阵

### 提示代码
```python
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix
import shap

# 1. Grad-CAM
def grad_cam(model, img_array, layer_name):
    # 创建模型，输出中间层和最终预测
    grad_model = tf.keras.models.Model(
        [model.inputs], 
        [model.get_layer(layer_name).output, model.output]
    )
    
    # 计算梯度
    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, np.argmax(predictions[0])]
    
    grads = tape.gradient(loss, conv_outputs)
    
    # 全局平均池化梯度
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))
    
    # 加权求和
    conv_outputs = conv_outputs[0]
    heatmap = conv_outputs @ pooled_grads[..., tf.newaxis]
    heatmap = tf.squeeze(heatmap)
    
    # 归一化
    heatmap = tf.maximum(heatmap, 0) / tf.math.reduce_max(heatmap)
    return heat