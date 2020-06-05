import numpy
from pandas import DataFrame
from matplotlib import pyplot
from pandas import read_csv

# 파일 불러오기
df_typoon = read_csv('data/태풍발생표.csv')

# 인덱스를 '년'으로 대체
df_typoon = df_typoon.rename(index=df_typoon['년']).drop('년', axis=1)

# 컬럼을 월별로 필터링
df_typoon = df_typoon.filter(['연합계'])

# 컬럼이름 변경하기
df_typoon.rename(columns={'연합계':'태풍발생횟수'}, inplace=True)

# 그래프 기본 설정
pyplot.rcParams['font.family'] = 'Malgun Gothic'
pyplot.rcParams['font.size'] = 16
pyplot.rcParams['figure.figsize'] = (10, 6)

# 그래프로 시각화
df_typoon.plot(color='#33425b', marker='o')
pyplot.grid()
pyplot.legend()
pyplot.title('2012-2019년 태풍발생횟수')
pyplot.xlabel('년')
pyplot.ylabel('태풍발생횟수')
pyplot.savefig('picture/Typoon_frequency/2012-2019년 태풍발생횟수_ppt.png')
pyplot.show()

# 그래프 기본 설정
pyplot.rcParams['font.family'] = 'Malgun Gothic'
pyplot.rcParams['font.size'] = 25
pyplot.rcParams['figure.figsize'] = (20, 12)

# 그래프로 시각화
df_typoon.plot(color='#33425b', marker='o')
pyplot.grid()
pyplot.legend()
pyplot.title('2012-2019년 태풍발생횟수')
pyplot.xlabel('년')
pyplot.ylabel('태풍발생횟수')
pyplot.savefig('picture/Typoon_frequency/2012-2019년 태풍발생횟수_web.png')
pyplot.show()

# csv파일로 추출
df_typoon.to_csv('data_after/2012-2019년 태풍발생횟수_.csv')

# json파일로 추출
df_typoon.to_json('data_after/typoon_frequency.json', orient='table')