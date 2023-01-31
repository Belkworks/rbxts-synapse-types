// namespaces index

/*
Namespace Index
syn
syn.crypt
syn.crypt.base64
syn.crypt.hex
syn.crypt.lz4
syn.crypt.derive
syn.crypt.user
syn.crypt.user.prompt
syn.crypt.seal
syn.crypt.sign
syn.crypt.sign.detached
syn.crypt.custom
syn.crypt.url
syn.oth
bit
Drawing
DrawingImmediate
debug

Bit Library
All bit library functions take 32-bit unsigned integers and return a signed 32-bit result. Take note of this when implementing. If you want unsigned results, we suggest using the bit32 library.

Functions
badd

int bit.badd(...uint)
Adds 2 or more integers.

bsub

int bit.bsub(...uint)
Subtracts 2 or more integers (from left to right).

bmul

int bit.bmul(...uint)
Multiplies 2 or more integers.

bdiv

int bit.bdiv(...uint)
Divides 2 or more integers (from left to right).

band

int bit.band(...uint)
Performs bitwise AND on 2 or more integers.

bor

int bit.bor(...uint)
Performs bitwise OR on 2 or more integers.

bxor

int bit.bxor(...uint)
Performs bitwise XOR on 2 or more integers.

bnot

int bit.bnot(...uint)
Performs bitwise NOT on an integer.

lshift

int bit.lshift(value: uint, n: uint)
Shifts value left by n bits.

rshift

int bit.rshift(value: uint, n: uint)
Shifts value right by n bits.

arshift

int bit.arshift(value: uint, n: uint)
Performs an arthimetic shift right on value by n bits.

rol

int bit.rol(value: uint, n: uint)
Rotates value left n bits.

ror

int bit.ror(value: uint, n: uint)
Rotates value right n bits.

bpopcount

int bit.bpopcount(value: uint)
Returns the number of set bits in value.

bswap

int bit.bswap(value: uint)
Inverts value's endianness.

tohex

int bit.tohex(value: uint, nibbles?: int = 8)
Converts value to a hex string.

tobit

int bit.tobit(value: uint)
Converts value into proper form for bitwise operations.

Synapse Cryptography Library
Namespaces
syn.crypt.base64
syn.crypt.hex
syn.crypt.lz4
syn.crypt.derive
syn.crypt.user
syn.crypt.seal
syn.crypt.sign
syn.crypt.custom
syn.crypt.url
Functions
encrypt

string syn.crypt.encrypt(data: string, key: string, additional_data?: string)
Encrypts data with key, and includes additional_data if it is passed.

(Uses libsodium secretbox for when additional_data isn't passed, and the AEAD form of the same algorithm if it is passed. Nonce is generated and appended before the encrypted message.)

decrypt

string syn.crypt.decrypt(ciphertext: string, key: string, additional_data?: string)
Decrypts ciphertext with key. The data (along with additional_data if it is passed) is also authenticated via a MAC before being returned.

(Uses libsodium secretbox or the AEAD form if additional_data is passed, like above.)

hash

string syn.crypt.hash(data: string, key?: string)
Hashes data with Blake2B. Optionally, you can pass key to create a 'keyed' hash, for which the hash will never be the same for different keys.

(Uses libsodium generic hashing.)

hmac

string syn.crypt.hmac(data: string, key: string)
Creates a HMAC signature from data and key. Note this is not the same as passing a key to the above function, and uses a different algorithm.

(Uses libsodium authentication.)

random

string syn.crypt.random(len: uint)
Generates a random string with size (cannot be negative or exceed 1024).

syn.crypt.base64
Functions
encode

string syn.crypt.base64.encode(input: string)
Base64 encodes input.

decode

string syn.crypt.base64.decode(input: string)
Base64 decodes input.

syn.crypt.hex
Functions
encode

string syn.crypt.hex.encode(input: string)
Encodes input in hexadecimal.

decode

string syn.crypt.hex.decode(input: string)
Decodes input in hexadecimal.

syn.crypt.lz4
Functions
compress

string syn.crypt.lz4.compress(data: string)
Compresses data with LZ4.

syn.crypt.derive
Functions
key

string syn.crypt.derive.key(len: uint, key: string, sub_key_id: uint, context: string)
Derives a cryptographic key from another key specified - len specifies the length of the generated key, sub_key_id is the index of the key to generate, and context is a 8-byte string that uniquely identifies the script that is generating this key.

The context string can be any 8 ASCII characters. Some examples are SynapseX, MyScript, and _Script_.

Note: Due to Lua's usage of 64 bit floating point numbers, the maximum safe integer to pass to sub_key_id is 2^52. Passing a larger number will result in undefined behavior.

(Uses libsodium key derivation.)


string syn.crypt.derive.key(len: uint, key: string, id: string)
Alternatively, you can derive a cryptographic key from key with len length from a simple ID passed into id. This can be a message of any length.

(Uses libsodium generic hashing, with the key being used for a keyed hash.)

password

string syn.crypt.derive.password(len: uint, password: string, salt: string, mode: PasswordDerivationMode) [yields]
Derives a cryptographic key from a user-entered password. Due to passwords usually being low-complexity and easy to crack, this function uses a password hashing function to achieve its goals.

In order to use this function, you must pass a 16-byte salt. You can generate this via syn.crypt.random.

Password hashing functions are deliberately slow - this is to make bruteforce attacks harder. The mode (or opslimit/memlimit) parameter allows you to specify how much security you want your derived key to have. You should choose the mode you wish to use based on how acceptable the wait for function completion is for your application, and what the security requirements for your application are.

Warning: Using the higher security PasswordDerivationMode options (or a memlimit parameter higher then 512MiB) with more then one password hash being processed at once can cause crashes due to high-memory requirements for the hash function.

(Uses libsodium password hashing.)

PasswordDerivationMode
Mode	Note
Interactive	The password hash takes ~100 milliseconds to complete on a modern PC.
Moderate	The password hash takes ~1 second to complete on a modern PC.
Sensitive	The password hash takes ~5 seconds to complete on a modern PC. Please note the warning above, as it particularly affects this.

string syn.crypt.derive.password(len: uint, password: string, salt: string, ops_limit: uint, mem_limit: 

    syn.crypt.user
Namespaces
crypto.user.prompt
Functions
encrypt

string syn.crypt.user.encrypt(data: string, mode: UserEncryptionMode, key?: string)
Encrypts data in a way that only the caller's Synapse X account can decrypt it. You can also pass a key to add a secondary key to the encryption if you wish.

Note: If the user resets their Synapse X password, the output of this function will not be decryptable anymore. The user simply changing their password when they know their current one will not cause this to happen, however.

The mode parameter controls how the encryption works.

UserEncryptionMode
Mode	Note
SynAccount	Ties the encrypted data to the users Synapse X account. The data is decryptable on other machines if the pre-conditions stated above are met.
WindowsAccount	Ties the encrypted data to both the users Synapse X account and Windows account. The data is only decryptable if both the pre-conditions stated above are met and the user does not reset their Windows password.
WindowsMachine	Ties the encrypted data to both the users Synapse X account and Windows machine. The data is only decryptable if both the pre-conditions stated above are met and the user does not reset their Windows PC.
decrypt

string syn.crypt.user.decrypt(ciphertext: string, key?: string)
Decrypts ciphertext from the Per-User Encrypt function above. You do not need to pass the UserEncryptionMode you used to encrypt this data, but you need to pass the key you used to encrypt the data if one was specified. The function will error if decryption fails.

sign

string syn.crypt.user.sign(data: string)
Signs data in a way that only the caller's Synapse X account can produce this signature. Equivalent to syn.crypt.sign.detached.create with a user-unique key.

You can verify data was signed with this method from a web request. See the HTTP APIs for more information.

verify

bool syn.crypt.user.verify(data: string, signature: string)
Verifies data was signed by the syn.crypt.user.sign function from the caller's Synapse X account. If you want to verify data signed by another user, get their public key from the HTTP APIs.


crypto.user.prompt
All Per-User APIs also have a prompting equivalent under the syn.crypt.user.prompt table. These functions make a verification box asking the user to authenticate the request made by the script, and only return the data if the user accepts. This is more useful for more 'high security' data that you dont want cryptographic operations performed on by an unauthorized script.

All of these functions yield as well, with the exclusion of syn.crypt.user.prompt.verify which does not need to be authenticated by the user.

Functions
encrypt

string syn.crypt.user.prompt.encrypt(data: string, mode: UserEncryptionMode, key?: string) [yields]
Prompt equivalent to syn.crypt.user.encrypt.

decrypt

string syn.crypt.user.prompt.decrypt(ciphertext: string, key?: string) [yields]
Prompt equivalent to syn.crypt.user.decrypt

sign

string syn.crypt.user.prompt.sign(data: string) [yields]
Prompt equivalent to syn.crypt.user.sign.

verify

bool syn.crypt.user.prompt.verify(data: string, signature: string)
Prompt equivalent to syn.crypt.user.verify.

syn.crypt.seal
Functions
keygen

(string, string) syn.crypt.seal.keygen()
Generates a new public & secret keypair, and returns it in that order.

derive

(string, string) syn.crypt.seal.derive(key: string)
TODO

encrypt

string syn.crypt.seal.encrypt(plaintext: string, public_key: string)
Encrypts data with the public_key. The data can only be later decrypted via the secret key in the keypair.

decrypt

string syn.crypt.seal.decrypt(ciphertext: string, public_key: string, secret_key: string)
Decrypts data with the public_key and secret_key.

syn.crypt.sign
Namespaces
syn.crypt.sign.detached
Functions
keygen

(string, string) syn.crypt.sign.keygen()
Generates a new public & secret keypair, and returns it in that order.

NOTE; These keypairs are NOT compatible with the ones used for the encryption library above.

derive

(string, string) syn.crypt.sign.derive(key: string)
TODO

create

string syn.crypt.sign.create(data: string, secret_key: string)
Creates a signature for data with the secret_key, and returns the signature combined with the message.

open

string syn.crypt.sign.open(data: string, public_key: string)
Verifies the data passed in with the public_key, and returns the original message if the verification succeeds. Errors if verification fails.

syn.crypt.sign.detached
Functions
create

string syn.crypt.sign.detached.create(data: string, secret_key: string)
Creates a signature for data with the secret_key, and returns the signature.

verify

bool syn.crypt.sign.detached.verify(data: string, signature: string, public_key: string)
Verifies the data passed in with the public_key and signature, and returns true if the verification succeeds. Returns false if verification fails.

syn.crypt.custom
Functions
encrypt

string syn.crypt.custom.encrypt(cipher: string, data: string, key: string, iv: string)
Encrypts data with key using selected cipher and iv/nonce.

decrypt

string syn.crypt.custom.decrypt(cipher: string, data: string, key: string, iv: string)
Decrypts ciphertext with key using selected cipher and iv/nonce.

hash

string syn.crypt.custom.hash(cipher: string, data: string)
Hashes data with algorithm.

Custom Hashing Algorithms
MD5	SHA1	SHA2	SHA3	BLAKE
md5	sha1	sha224	sha3-224	blake2b
sha256	sha3-256	blake2s
sha384	sha3-384	
sha512	sha3-512	
hmac

string syn.crypt.custom.hmac(cipher: string, data: string, key: string)
Creates a HMAC signature from data and key with algorithm.

Custom HMAC Algorithms
MD5	SHA1	SHA2	SHA3
md5	sha1	sha256	sha3-224
sha384	sha3-256
sha512	sha3-384
sha3-512

syn.crypt.url
Functions
encode

string syn.crypt.url.encode(data: string)
decode

string syn.crypt.url.decode(data: string)

*/
