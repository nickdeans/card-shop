const data = [
    {
        id: 1,
        name: 'Mickey Mantle',
        price: 499.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6IktLMzJBdm9ldGwrbS9rRkhjamU0QVE9PSIsInZhbHVlIjoiTTB0RUtyOEVRYXVJNXNBa1BGZjhiby9pZnNvZVppTDlZZHlpU2VCUEZPV3VrMHM5bGErMEw0dDVWckI1YkRGdUhXTlpMeE5OdU5iMVRUbVpSaGdscUE9PSIsIm1hYyI6ImU4ODNlOTNhOTcxNTQwODYxZTJhMTc0ODFhOWNiMDkyY2I5YzA5NWViOTljNTY3MGMwOTY5OWM2ZjIwMzYxODkifQ==',
        text: '1953 TOPPS'

    },
    {
        id: 2,
        name: 'Tom Brady',
        price: 219.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6ImJ1N2VDR2pPeVpBYXBuMTlrczdsTWc9PSIsInZhbHVlIjoiQ1JTNFMySTJEd3NxUEJLU1llc0w1T3dNV0szTUlLS1F6OVltS0kwNXNnanBKaUcvVHRtLysraUxWLytKY1ZBMThaM1ZJTDF3VlZzbEtQTUFKU3NCd3c9PSIsIm1hYyI6IjVhOWUwNmM0ZmJjNWMzYTI3MGJmOTMyOGMwNjUzYzgxMzAyMDdkNTFiMzZjOTE0OWE1MmRmMTIzNGM1ZDc4Y2YifQ==',
        text: '2000 Playoff Ticket'

    },
    {
        id: 3,
        name: 'Joe Jackson',
        price: 999.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6IlpDZy9kVy8yZWdRdXBOVjAwakRtZ0E9PSIsInZhbHVlIjoiL3hzdnovRVpKMnpOQWhFT2dkNHZaZ3kxMXR5dEdkc3V2NWgzTWh4Vmczb2psTVNrOW9RdkhzMWEwZzhxeVJ0Q1A3cGw5a1krOUNiL0JzWUl5NjNkN3c9PSIsIm1hYyI6IjVmZmY0MThlNDNiMzkwMmViMGZhMjcwMWY4MzgzM2MxMTlhZTk2N2YxNTIwOTQwZTgyOWUwOTY1ZGRjYmJjYzcifQ==',
        text: '1915 Cracker Jack'

    },
    {
        id: 4,
        name: 'Jackie Robinson',
        price: 200.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6InN5SExvS0lxb0hjWlB0Z3RWbjFsdGc9PSIsInZhbHVlIjoiU3JKdVZWbWZCSDhRWmdwNjZSWmZaSXRNcDFIQS91alY3QSt5bnpTSTFWS1NGdW1wN1hXOHNQN1FqaWVlejgvR3NCa1hDajkyMFowN2NodHdrclpBK0E9PSIsIm1hYyI6ImMwZWU0NzU1YzU1NmM0NDY1MDkyZmU3YjFhNTI2ZjVlM2VmYTc1NDQwMTZjYThiZTg2OWI2YjE0YjA0ZjBmMDQifQ==',
        text: '1948 Leaf Gum Co'

    },
    {
        id: 5,
        name: 'Michael Jordan',
        price: 400.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6Ik1meUJQakpKNzZGaXdkbEZxTnRRQ1E9PSIsInZhbHVlIjoiWjgyNzJzQ1pOR1V5bkI1clpXTXVreThWN3hCWDVVajUxbnd2WjNMemhrREZaSVlUM2JWMHlOVzNvbTlWY3ZQR1JadzcveTZmcXFsRThrcTc4bnJmWlE9PSIsIm1hYyI6ImQ1NTk3ODFjNDg2N2Q5ZGExZGJlMzhiMTllZTY5NmNiZWY5YjI1M2FmYWEyNDI4N2E5YTA2YjU2M2JjMmRiNGEifQ==',
        text: '1986 Fleer'

    },
    {
        id: 6,
        name: 'Tom Brady',
        price: 300.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6IklyNk9TSDdoRmpCNm8rWXBFNjh5NEE9PSIsInZhbHVlIjoiZzU4VlBWbm83NWpSWUpKeVVralhQaGVGZjVuRVptYStFVGZFTTFDUlZ2ckFGbGI5RGZ5VDhjek9JUnlsSlNQdFBCSWRqSVJySW91ZFY0SVZkS1N5ckE9PSIsIm1hYyI6IjA2NWI4ZThjZjJjNDYyOTBjNzU5YzA5NTdlMDlkMzFiYmU1OWIwNjExYjBlOGM3Y2EzOTI0ODA3NjA2OTMyNjgifQ==',
        text: '2000 Bowman Chrome'

    },
        {
        id: 7,
        name: 'Kobe Bryant',
        price: 670.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6IlczaUUrc2Ziay9GQmlVdElqV0JzUEE9PSIsInZhbHVlIjoiMnpFOEtqQkVwVlM5V3NQYXkxRDNXNU5PWmR5bVk5TzB3d3FBRUF4aGZTYkhSWVFrcGNSNXU4dm80S1JtODIvNVRzZ0psNUFIaUptWXpBclZzRm1aSGc9PSIsIm1hYyI6IjkxNGQyM2Q4Y2UzN2JlMzUwMDdmM2Q3ZGJjOGVmZjM2NjM3ZDI5Y2I3ZDM0ZThkMTcxZjNiNDk3YWUxOGI3ODUifQ==',
        text: '1997 Metal Universe'

    },
    {
        id: 8,
        name: 'Luka Doncic',
        price: 460.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6IkZvYzkxMXp6QXdwMnV0ZDBaZ3BsWFE9PSIsInZhbHVlIjoieWw3U1BNQURrR2tWbldhTFpqRnN5K2tWZHZFVlgyWXBuQlNKZEpJVTFZQjZVWlVnZ3grQ3gzL1B2dDhObGo5YSIsIm1hYyI6ImQwMDNiMWQ0ZjhjYmEwNjhhNzY2NTM5MmIxNGJkZWViNmFlYjJlM2U4NGVlNTA2OTI4MGM1MDBmNmU1MzBiZGUifQ==',
        text: '2018 Flawless'

    },
    {
        id: 9,
        name: 'Justin Herbert',
        price: 390.99,
        image: 'https://dilxwvfkfup17.cloudfront.net/eyJpdiI6ImVPdHpXSEh6VnN1TXNqazh5YTdCK0E9PSIsInZhbHVlIjoiWkJyWTVybjVrWnJQRGlXL3JKMVl6Rk1QUU1pSGFkVHlkTlRjMWw4Yit3V3V0L2NDOHAybnBwdUpCK1N6dkh2YkdMSGpDeWJpNXFmQnJJN1JPNExuQkE9PSIsIm1hYyI6IjZhNDIwNjI3YjFkNGIzZTBmYzkyODE4M2Y3ZWFjYmU5ZDg2ODRlNWVhODk0ZWIzNDQwZmIzMTg1NTM5M2QxYWUifQ==',
        text: '2020 Panini Flawless'

    },
]

export default data;