---
slug: security
title: Concept of Security
description: Main concepts in software development security
date: 2021-04-04
---

## Concepts in Security world

### Encoding   
Way to tranform data for usability purpose, i.e. tranfer etc. Can be decoded with same algorithm   

### Encryption
Way to keep data secret. Only to be consumed by entity that has encryption key    

**Cipher** - Mechanism or engine that encrypts actual message using given algorithm. In java security api   
```java
Cipher cipher = Cipher.getInstance("AES");
Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(keyBytes, "AES"));
cipher.doFinal(message)
```


### Hashing
Way to ensure integraty of data, make sure that data is not altered, same input -> same output but not otherway around. *Digest* is an output of hash function for given message and receiver validates messages integrity with received digest value. When digest is encrypted with private key, it is called *digital signature*. 
**MD5** is popular algorithm for hashing, but known to be collided. 
**SHA** is new and better

### Obfuscation
Way to hide whole or part of the data and makes not to copy or replicate data  

**Certificate** is file containing public key and its related information like whom it belongs to and who signed it and when to expire etc.


Cryptographic key - random piece of information or parameter used for encryption/decryption
Secret key - single key shared among parties, to be kept securely (AES, DES). Symmetric meaning same key used for both enc/dec.
AES key: 128, 192 or 256 bits
DES key: 64 bit
DES3: 56, 112?


Public/Private key - different keys, private is kept secretly, public key is shared openly (RSA). Asymmetric meaning public for enc and private for decryption. 


RSA - algorithm for pub/priv keys
GPG - GNU public Guard

