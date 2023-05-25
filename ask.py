import numpy as np

A = int(input("amplitude: "))
frequency = int(input("frekuensi: "))
bitrate = int(input("durasi: "))

duration = int(input("Duration: "))

num_bits = bitrate*duration
bits = np.random.radint()