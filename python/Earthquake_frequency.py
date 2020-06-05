import numpy
from pandas import DataFrame
from matplotlib import pyplot
from pandas import read_csv

# 데이터 불러오기
df = read_csv('data/지역별_규모별_지진발생_횟수.csv')
col_list = list(df.columns)

# 컬럼을 월별로 필터링
df_earthquake = df.filter(['지역별', '2012', '2013', '2014', '2015', '2016', '2017',
                           '2018', '2019'])
# 첫번째 행만 남기고 전부 삭제
for i in range(65) :
    if i != 0 :
        df_earthquake.drop(i, inplace=True)

# 인덱스를 '지역별' 로 대체
df_earthquake = df_earthquake.rename(index=df_earthquake['지역별']).drop('지역별', axis=1)

# 인덱스이름 변경하기
df_earthquake = df_earthquake.rename(index={'계':'지진발생횟수'})


# 행렬 전치(바꾸기)
df_earthquake = df_earthquake.T

# 그래프 기본 설정
pyplot.rcParams['font.family'] = 'Malgun Gothic'
pyplot.rcParams['font.size'] = 16
pyplot.rcParams['figure.figsize'] = (10, 6)

# 그래프로 시각화
xpos = numpy.arange(len(df_earthquake))
xtext = list(df_earthquake.index)
df_earthquake.plot(color='#f33535', marker='o')
pyplot.grid()
pyplot.legend()
pyplot.title('2012-2019년 지진발생횟수')
pyplot.xlabel('년')
pyplot.ylabel('지진발생횟수')
pyplot.xticks(xpos, xtext)
pyplot.savefig('picture/Earthquake_frequency/2012-2019년 지진발생횟수_ppt.png')
pyplot.show()

# 그래프 기본 설정
pyplot.rcParams['font.family'] = 'Malgun Gothic'
pyplot.rcParams['font.size'] = 25
pyplot.rcParams['figure.figsize'] = (20, 12)

# 그래프로 시각화
xpos = numpy.arange(len(df_earthquake))
xtext = list(df_earthquake.index)
df_earthquake.plot(color='#f33535', marker='o')
pyplot.grid()
pyplot.legend()
pyplot.title('2012-2019년 지진발생횟수')
pyplot.xlabel('년')
pyplot.ylabel('지진발생횟수')
pyplot.xticks(xpos, xtext)
pyplot.savefig('picture/Earthquake_frequency/2012-2019년 지진발생횟수_web.png')
pyplot.show()

# csv파일로 추출
df_earthquake.to_csv('data_after/2012-2019년 지진발생횟수.csv')

# json파일로 추출
df_earthquake.to_json('data_after/earthquake_frequency.json', orient='table')