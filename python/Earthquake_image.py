import folium
from pandas import read_csv

df = read_csv('data/지진정보.csv')
df_2012 = df[df['시간'].str.contains('2012') == True]
df_2013 = df[df['시간'].str.contains('2013') == True]
df_2014 = df[df['시간'].str.contains('2014') == True]
df_2015 = df[df['시간'].str.contains('2015') == True]
df_2016 = df[df['시간'].str.contains('2016') == True]
df_2017 = df[df['시간'].str.contains('2017') == True]
df_2018 = df[df['시간'].str.contains('2018') == True]
df_2019 = df[df['시간'].str.contains('2019') == True]

df_2012 = df_2012.filter(['위도', '경도', '위치'])
df_2013 = df_2013.filter(['위도', '경도', '위치'])
df_2014 = df_2014.filter(['위도', '경도', '위치'])
df_2015 = df_2015.filter(['위도', '경도', '위치'])
df_2016 = df_2016.filter(['위도', '경도', '위치'])
df_2017 = df_2017.filter(['위도', '경도', '위치'])
df_2018 = df_2018.filter(['위도', '경도', '위치'])
df_2019 = df_2019.filter(['위도', '경도', '위치'])
print(df_2012)

map_2012 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2012.index :
    location = df_2012.loc[i, '위치']
    lat = df_2012.loc[i, '위도']
    lng = df_2012.loc[i, '경도']
    marker_2012 = folium.Marker([lat, lng], popup=location).add_to(map_2012)
map_2012.save('picture/Earthquake_image/map_2012.html')

map_2013 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2013.index :
    location = df_2013.loc[i, '위치']
    lat = df_2013.loc[i, '위도']
    lng = df_2013.loc[i, '경도']
    marker_2013 = folium.Marker([lat, lng], popup=location).add_to(map_2013)
map_2013.save('picture/Earthquake_image/map_2013.html')

map_2014 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2014.index :
    location = df_2014.loc[i, '위치']
    lat = df_2014.loc[i, '위도']
    lng = df_2014.loc[i, '경도']
    marker_2014 = folium.Marker([lat, lng], popup=location).add_to(map_2014)
map_2014.save('picture/Earthquake_image/map_2014.html')

map_2015 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2015.index :
    location = df_2015.loc[i, '위치']
    lat = df_2015.loc[i, '위도']
    lng = df_2015.loc[i, '경도']
    marker_2015 = folium.Marker([lat, lng], popup=location).add_to(map_2015)
map_2015.save('picture/Earthquake_image/map_2015.html')

map_2016 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2016.index :
    location = df_2016.loc[i, '위치']
    lat = df_2016.loc[i, '위도']
    lng = df_2016.loc[i, '경도']
    marker_2016 = folium.Marker([lat, lng], popup=location).add_to(map_2016)
map_2016.save('picture/Earthquake_image/map_2016.html')

map_2017 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2017.index :
    location = df_2017.loc[i, '위치']
    lat = df_2017.loc[i, '위도']
    lng = df_2017.loc[i, '경도']
    marker_2017 = folium.Marker([lat, lng], popup=location).add_to(map_2017)
map_2017.save('picture/Earthquake_image/map_2012.html')

map_2018 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2018.index :
    location = df_2018.loc[i, '위치']
    lat = df_2018.loc[i, '위도']
    lng = df_2018.loc[i, '경도']
    marker_2018 = folium.Marker([lat, lng], popup=location).add_to(map_2018)
map_2018.save('picture/Earthquake_image/map_2018.html')

map_2019 = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df_2019.index :
    location = df_2019.loc[i, '위치']
    lat = df_2019.loc[i, '위도']
    lng = df_2019.loc[i, '경도']
    marker_2019 = folium.Marker([lat, lng], popup=location).add_to(map_2019)
map_2019.save('picture/Earthquake_image/map_2019.html')

map_all = folium.Map(location=[37.576001, 126.976800], zoom_start=6)
for i in df.index :
    location = df.loc[i, '위치']
    lat = df.loc[i, '위도']
    lng = df.loc[i, '경도']
    marker_all = folium.Marker([lat, lng], popup=location).add_to(map_all)
map_all.save('picture/Earthquake_image/map_all.html')