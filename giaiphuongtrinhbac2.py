'''Nguyễn Huy Hoàng-2121050727'''
def giai_phuong_trinh_bac_2 (a, b, c):
    delta = b ** 2 - 4 * a * c
    if delta < 0:
        return "Vô nghiệm"
    elif delta == 0:
        x = -b / (2 * a)
        return x
    else:
        x1 = (-b + (delta**0.5)) / (2 * a)
        x2 = (-b - (delta**0.5)) / (2 * a)
        return x1, x2