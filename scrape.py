import bs4


from bs4 import BeautifulSoup
import requests
import re

pattern = '@'

url = "https://www.hotmulliganband.com/contact"

webpage_content = requests.get(url).text

soup = BeautifulSoup(webpage_content, "lxml")

Text_1 = soup.findAll(string=re.compile(pattern))

print(Text_1)