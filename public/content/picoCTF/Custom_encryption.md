# Custom encryption

## Challenge Details
Given the source code for custom encryption, decrypt the encrypted flag. 

## Approach & Thought Process
This one was difficult, but fun. I had to look up a write up because I was going too deep on the sauce. 

## Solution
```python
from random import randint
import sys

def generator(g, x, p):
    return pow(g, x) % p

def is_prime(p):
    v = 0
    for i in range(2, p + 1):
        if p % i == 0:
            v = v + 1
    if v > 1:
        return False
    else:
        return True

def encrypt(plaintext, key):
    cipher = []
    for char in plaintext:
        cipher.append(((ord(char) * key*311))) # encrypted char -> unicode
    return cipher

def decrypt(cipher, key):
    plain_text = ""
    for encrypted_value in cipher:
        decrypted_value = encrypted_value // (key * 311)
        plain_text += chr(decrypted_value) # decrypted unicode -> character
    return plain_text

# (reversed(plaintext) XOR key)
def dynamic_xor_encrypt(plaintext, text_key): 
    cipher_text = ""
    key_length = len(text_key)
    for i, char in enumerate(plaintext[::-1]):
        key_char = text_key[i % key_length]
        encrypted_char = chr(ord(char) ^ ord(key_char)) # xor char and key_char and return as unicode 
        cipher_text += encrypted_char

    return cipher_text

def dynamic_xor_decrypt(plaintext, text_key):
    # Loop the decryption process 3 times 
    for _ in range(3):
        temp_text = ""
        key_length = len(text_key)

        for i, char in enumerate(plaintext[::-1]):
            key_char = text_key[i % key_length]
            decrypted_char = chr(ord(char) ^ ord(key_char))
            temp_text += decrypted_char
        
        # The result of this pass becomes the input for the next pass
        plaintext = temp_text

    return plaintext

def test(plain_text, text_key):
    p = 97
    g = 31
    if not is_prime(p) and not is_prime(g):
        print("Enter prime numbers")
        return

    print(f"p = {p}")
    print(f"g = {g}\n")

    a = randint(p-10, p)
    b = randint(g-10, g)

    print(f"a = {a}")
    print(f"b = {b}\n")

    u = generator(g, a, p)
    v = generator(g, b, p)

    key = generator(v, a, p)
    b_key = generator(u, b, p) # (g ^ x) % p

    shared_key = None
    if key == b_key:
        shared_key = key
    else:
        print("Invalid key")
        return

    # encrypt
    semi_cipher = dynamic_xor_encrypt(plain_text, text_key)
    cipher = encrypt(semi_cipher, shared_key) 

    print('-- Decrypting --')

    semi_attempt = decrypt(cipher, shared_key)
    if semi_attempt == semi_cipher:
        print("Match on semi_cipher")
    else: 
        return 

    attempted_plain_text = dynamic_xor_decrypt(semi_attempt, text_key)
    if plain_text == attempted_plain_text:
        print("Decrypted cipher: ", attempted_plain_text)
    else: 
        print("Failed to decrypt")
        return 

def decrypt_flag():
    p = 97
    g = 31
    if not is_prime(p) and not is_prime(g):
        print("Enter prime numbers")
        return

    print(f"p = {p}")
    print(f"g = {g}\n")

    # the enc flag has hard coded values of 88 and 26
    a = 88 
    b = 26

    print(f"a = {a}")
    print(f"b = {b}\n")

    # generate shared keys
    u = generator(g, a, p)
    v = generator(g, b, p)
    key = generator(v, a, p)
    b_key = generator(u, b, p) 

    shared_key = None
    if key == b_key:
        shared_key = key
    else:
        print("Invalid key")
        return

    # provided cipher
    cipher =  [97965, 185045, 740180, 946995, 1012305, 21770, 827260, 751065, 718410, 457170, 0, 903455, 228585, 54425, 740180, 0, 239470, 936110, 10885, 674870, 261240, 293895, 65310, 65310, 185045, 65310, 283010, 555135, 348320, 533365, 283010, 76195, 130620, 185045]

    semi_cipher = decrypt(cipher, shared_key)
    flag = dynamic_xor_decrypt(semi_cipher, "trudeau") # this text_key was part of the original source code
    print("The flag is: ", flag)

if __name__ == "__main__":
    if len(sys.argv) > 1:
        message = sys.argv[1]
        test(message, "abc")
    else: 
        decrypt_flag()
```

I had to draw out how the `dynamic_xor_encrypt` function worked and from this I figured out why I had to decrypt 3 times. `abcd` is the plain text and the text_key is `jkl`.   
![Custom_encryption](/content/picoCTF/Custom_encryption.png) 
