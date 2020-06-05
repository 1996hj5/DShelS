import numpy
from pandas import DataFrame
from matplotlib import pyplot
from pandas import read_csv

# 데이터 불러오기
df = read_csv('data/지역별_규모별_지진발생_횟수.csv')
col_list = list(df.columns)

# 컬럼을 월별로 필터링
df_earthquake = df.filter(['리히터규모별', '2012', '2013', '2014', '2015', '2016',
                           '2017', '2018', '2019'])

# 2,3,4,5번째 행만 남기고 전부 삭제
for i in range(65) :
    if i not in [1,2,3,4] :
        df_earthquake.drop(i, inplace=True)

# 인덱스를 '리히터규모별' 로 대체
df_earthquake = df_earthquake.rename(index=df_earthquake['리히터규모별']).drop('리히터규모별', axis=1)

# 인덱스이름 변경하기
df_earthquake = df_earthquake.rename(index={'ML≥5':'5이상', '5> ML≥4':'4점대',
                                            '4＞ML≥3':'3점대', '3＞ML≥2':'2점대'})

# 컬럼을 2012 -> 2012년로 바꾸기
dic_year = {'2012':'2012년', '2013':'2013년', '2014':'2014년', '2015':'2015년',
            '2016':'2016년', '2017':'2017년', '2018':'2018년', '2019':'2019년'}
df_earthquake.rename(columns=dic_year, inplace=True)

# 행렬 전치(바꾸기)
df_earthquake = df_earthquake.T

# 2012-2019년까지의 지진발생횟수를 더하고 2012-2019년 열은 삭제
df_earthquake['지진발생횟수'] = df_earthquake.sum(axis=1)

# 그래프 기본 설정
pyplot.rcParams['font.family'] = 'Malgun Gothic'
pyplot.rcParams['font.size'] = 25
pyplot.rcParams['figure.figsize'] = (20, 12)

# 이름지정
over5 = df_earthquake['5이상']
over4 = df_earthquake['4점대']
over3 = df_earthquake['3점대']
over2 = df_earthquake['2점대']

# 막대그래프로 시각화
xpos = numpy.arange(len(df_earthquake))
xtext = list(df_earthquake.index)
pyplot.bar(range(len(over2)), over2, color='g', )
pyplot.bar(range(len(over3)), over3, bottom=over2, color='b')
pyplot.bar(range(len(over4)), over4, bottom=over2+over3, color='y')
pyplot.bar(range(len(over5)), over5, bottom=over2+over3+over4, color='r')
pyplot.legend(['규모 2~3', '규모 3~4', '규모 4~5', '규모 5이상'])
pyplot.title('2012-2019년 리히터규모별 지진발생횟수')
pyplot.xlabel('년')
pyplot.ylabel('지진발생횟수')
pyplot.xticks(xpos, xtext)
for i, v in enumerate(list(df_earthquake['지진발생횟수'])) :
    txt = '%d번' %v
    pyplot.text(i, v, txt, fontsize=20, color='black',
                horizontalalignment='center',
                verticalalignment='bottom')
pyplot.savefig('picture/Earthquake_strength_year/2012-2019년 리히터규모별 지진발생횟수.png')
pyplot.show()

# csv파일로 추출
df_earthquake.to_csv('data_after/2012-2019년 규모별 지진발생횟수.csv')

# json파일로 추출
df_earthquake.to_json('data_after/earthquake_strength_year.json', orient='table')