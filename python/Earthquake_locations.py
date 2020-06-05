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

# 5,10,15,20,25,30,35,40,45,50,55,60번째 행만 남기고 전부 삭제
for i in range(65) :
    if i not in [5,10,15,20,25,30,35,40,45,50,55,60] :
        df_earthquake.drop(i, inplace=True)

# 인덱스를 '지역별' 로 대체
df_earthquake = df_earthquake.rename(index=df_earthquake['지역별']).drop('지역별', axis=1)

# 2012-2019년까지의 지진발생횟수를 더하고 2012-2019년 열은 삭제
df_earthquake['지진발생횟수'] = df_earthquake.sum(axis=1)
df_earthquake.drop(df_earthquake.columns[0:8], inplace=True, axis=1)

# 그래프 기본 설정
pyplot.rcParams['font.family'] = 'Malgun Gothic'
pyplot.rcParams['font.size'] = 22
pyplot.rcParams['figure.figsize'] = (20, 12)

# 막대그래프로 시각화
xpos = numpy.arange(len(df_earthquake))
xtext = list(df_earthquake.index)
df_earthquake.plot.bar(rot=30, color='#f33535', edgecolor='#33425b', linewidth='3')
pyplot.grid()
pyplot.legend()
pyplot.title('2012-2019년 지역별 지진발생횟수')
pyplot.xlabel('지역')
pyplot.ylabel('지진발생횟수')
pyplot.xticks(xpos, xtext)
for i, v in enumerate(list(df_earthquake['지진발생횟수'])) :
    txt = '%d번' %v
    pyplot.text(i, v, txt, fontsize=20, color='black',
                horizontalalignment='center',
                verticalalignment='bottom')
pyplot.savefig('picture/Earthquake_locations/지역별 지진발생횟수_막대그래프_web.png')
pyplot.show()

# 그래프 기본 설정
pyplot.rcParams['font.family'] = 'Malgun Gothic'
pyplot.rcParams['font.size'] = 14
pyplot.rcParams['figure.figsize'] = (10, 6)

# 막대그래프로 시각화
xpos = numpy.arange(len(df_earthquake))
xtext = list(df_earthquake.index)
df_earthquake.plot.bar(rot=30, color='#f33535', edgecolor='#33425b', linewidth='3')
pyplot.grid()
pyplot.legend()
pyplot.title('2012-2019년 지역별 지진발생횟수')
pyplot.xlabel('지역')
pyplot.ylabel('지진발생횟수')
pyplot.xticks(xpos, xtext)
for i, v in enumerate(list(df_earthquake['지진발생횟수'])) :
    txt = '%d번' %v
    pyplot.text(i, v, txt, fontsize=14, color='black',
                horizontalalignment='center',
                verticalalignment='bottom')
pyplot.savefig('picture/Earthquake_locations/지역별 지진발생횟수_막대그래프_ppt.png')
pyplot.show()

# csv파일로 추출
df_earthquake.to_csv('data_after/지역별 지진발생횟수.csv')

# json파일로 추출
df_earthquake.to_json('data_after/earthquake_locations.json', orient='table')