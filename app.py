import string
import random
import time
import math

# Hàm để đọc nội dung của tệp đầu vào
def read_input_file(file_path):
    # Mở tệp với mã hóa UTF-8 và đọc toàn bộ nội dung
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    return content

# Hàm để lưu văn bản đã mã hóa vào tệp đầu ra
def save_output_file(file_path, content):
    # Mở tệp với mã hóa UTF-8 và ghi nội dung vào tệp
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

# Hàm để tạo một hoán vị ngẫu nhiên của bảng chữ cái
def generate_permutation():
    # Tạo danh sách chứa các chữ cái từ a đến z
    alphabet = list(string.ascii_lowercase)
    # Tạo một bản sao của danh sách chữ cái
    permutation = alphabet[:]
    # Trộn ngẫu nhiên danh sách chữ cái
    random.shuffle(permutation)
    return ''.join(permutation)

# Hàm để mã hóa văn bản sử dụng hoán vị đã cho
def encrypt_text(plaintext, permutation):
    # Tạo danh sách chữ cái từ a đến z
    alphabet = string.ascii_lowercase
    # Tạo một từ điển ánh xạ từ chữ cái ban đầu sang chữ cái sau khi hoán vị
    perm_map = {alphabet[i]: permutation[i] for i in range(len(alphabet))}
    
    # Mã hóa văn bản bằng cách thay thế mỗi chữ cái theo hoán vị
    ciphertext = ''.join(perm_map[char] if char in perm_map else char for char in plaintext.lower())
    return ciphertext

# Hàm để tính mức độ an toàn của mật mã
def calculate_security_level():
    # Tính giai thừa của 26 (26!)
    return math.factorial(26)

# Hàm chính
def main():
    # Đường dẫn đến tệp đầu vào và đầu ra
    input_file_path = 'input.txt'
    output_file_path = 'output.txt'
    
    # Bước 1: Đọc văn bản đầu vào
    plaintext = read_input_file(input_file_path)
    
    # Bước 2: Định nghĩa một hoán vị
    permutation = generate_permutation()
    print(f"Sử dụng hoán vị: {permutation}")
    
    # Bước 3: Mã hóa văn bản đầu vào và đo thời gian thực hiện
    start_time = time.time()  # Bắt đầu đo thời gian
    ciphertext = encrypt_text(plaintext, permutation)
    end_time = time.time()  # Kết thúc đo thời gian
    encryption_time = end_time - start_time  # Tính thời gian mã hóa
    print(f"Thời gian mã hóa: {encryption_time} giây")
    
    # Bước 4: Lưu văn bản đã mã hóa
    save_output_file(output_file_path, ciphertext)
    print(f"Văn bản đã mã hóa được lưu vào {output_file_path}")
    
    # Bước 5: Tính và in ra mức độ an toàn
    security_level = calculate_security_level()
    print(f"Mức độ an toàn (kích thước không gian khóa): 26! = {security_level}")

# Chạy hàm chính
if __name__ == "__main__":
    main()
