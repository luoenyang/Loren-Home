
# 裁剪视频
# -t 输出时长，-ss起始时间，先缩放后裁剪 w h , x y偏移量
ffmpeg -i test.mp4 -vf "scale=1080:-2,crop=iw-100:ih-50:50:25" -t 10 -ss 00 -c:a copy output.mp4
ffmpeg -i test.mp4 -ss 00:00:00 -to 00:00:05 -vf "scale=1080:-2" -c:a copy output.mp4

# 淡入淡出
# trim 也有裁剪的作用
ffmpeg -i test2.mp4 -i test4.mp4 -filter_complex "[0:v]trim=duration=2,fade=out:st=1.5:d=0.5[v0];[1:v]fade=in:st=0:d=4,trim=start=0[v1];[v0][v1]concat=n=2:v=1:a=0[outv]" -map "[outv]" -map 0:a -map 1:a -c:a copy output.mp4
# 输出所有信息
# ffprobe -v quiet -print_format json -show_format -show_streams test.mp4 
# 关键是知道第一个视频的总时长才好设置淡出的st
# powershell获取视频时长 秒
ffmpeg -i test4.mp4 2>&1 | ForEach-Object { if ($_ -match "Duration:\s+(\d{2}):(\d{2}):(\d{2})\.(\d{2}),") {
        $hours = [int]$matches[1]
        $minutes = [int]$matches[2]
        $seconds = [int]$matches[3]
        $milliseconds = [int]$matches[4]
        $totalSeconds = $hours * 3600 + $minutes * 60 + $seconds + $milliseconds / 1000
        Write-Output $totalSeconds

        $st = $totalSeconds - 0.5;
        # 淡入淡出
        # ffmpeg -i test4.mp4 -i test4.mp4 -filter_complex "[0:v]trim=duration='$totalSeconds',fade=out:st='$st':d=0.5[v0];[1:v]fade=in:st=0:d=4[v1];[v0][v1]concat=n=2:v=1:a=0[outv]" -map "[outv]" -map 0:a -map 1:a -c:a copy output.mp4
        # 淡出
        ffmpeg -i test4.mp4 -filter_complex "[0:v]trim=duration='$totalSeconds',fade=out:st='$st':d=0.5[v0]" -map "[v0]" -map 0:a -c:a copy output.mp4
    } }
    
# 淡入淡出加模糊效果：boxblur
ffmpeg -i test2.mp4 -i test4.mp4 -filter_complex "[0:v]trim=duration=2,fade=out:st=1.5:d=0.5[v0];[1:v]boxblur=60:1:cr=0:ar=0,fade=in:st=0:d=4,trim=start=0[v1];[v0][v1]concat=n=2:v=1:a=0[outv]" -map "[outv]" -map 0:a -map 1:a -c:a copy output.mp4
# 单个视频的淡入淡出以及对音频的淡入淡出
ffmpeg -i test.mp4 -vf "fade=t=in:st=0:d=5" -af "afade=t=in:st=0:d=5" output.mp4



# 改变视频码率帧率等
# -i 参数指定输入视频文件，后面依次跟上码率、分辨率、帧率和编码格式
ffmpeg -i test.mp4 -b:v 500K -s 800x600 -r 20 -c:v libx264 output.mp4


# 改变视频速度
# setpts是操作视频，atempo是操作音频
# 要同时对视频和音频进行操作，否则总时长还是原时长
# // 慢速
ffmpeg -i test.mp4 -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" output.mp4
# // 快速 
ffmpeg -i test.mp4 -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2.0[a]" -map "[v]" -map "[a]" output.mp4


# 单个视频改变分辨率并添加黑色填充 scale pad
# scale=1080:ih*1080： 将视频的宽度设置为1080，高度等比缩放
# pad=iw:iw*16/9:  将视频的高度扩展，多余部分用黑色填充
# (ow-iw)/2:(oh-ih)/2: 将视频在水平和垂直方向上居中对齐，以便填充的黑色区域均匀分布在视频的上下两侧
ffmpeg -i test.mp4 -vf "scale=1080:ih*1080/iw,pad=iw:iw*16/9:(ow-iw)/2:(oh-ih)/2" output.mp4
# 注意和上面的区别 高是1080，宽自适应，填充到宽1080:高1920，视频居中
ffmpeg -i test.mp4 -vf "scale=-1:1080,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=black" output.mp4

# 简单合并两个视频，黑色填充保留原声
ffmpeg -i test.mp4 -i output1.mp4 -filter_complex "[0:v]scale=1080:-1:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:black[v0];[1:v]scale=1080:-1:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:black[v1];[v0][0:a][v1][1:a]concat=n=2:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]" output.mp4

# 多个视频合并改变分辨率并黑色填充，保留原声
# 强制保留宽高比 force_original_aspect_ratio=decrease
ffmpeg -i test.mp4 -i test2.mp4 -i test3.mp4 -i test4.mp4 \
-filter_complex "\
[0:v]scale='min(1280,iw)':min'(720,ih)':force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:black[v0]; \
[1:v]scale='min(1280,iw)':min'(720,ih)':force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:black[v1]; \
[2:v]scale='min(1280,iw)':min'(720,ih)':force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:black[v2]; \
[3:v]scale='min(1280,iw)':min'(720,ih)':force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:black[v3]; \
[v0][0:a][v1][1:a][v2][2:a][v3][3:a]concat=n=4:v=1:a=1[outv][outa]" \
-map "[outv]" -map "[outa]" output.mp4

# 添加图片/视频水印,可以用来做画中画
# 设置位置overlay=30:30
ffmpeg -i test.mp4 -i ../img/test.jpg -filter_complex "[1:v]scale='min(100,iw)':min'(100,ih)'[small];[0,v][small]overlay=30:30" output.mp4
ffmpeg -i test.mp4 -i test2.mp4 -filter_complex "[1:v]scale='min(200,iw)':min'(200,ih):force_original_aspect_ratio=decrease'[small];[0,v][small]overlay=30:30" output.mp4

# 文字水印
# -codec:a copy 表示复制原视频的音频流
# x=10:y=10 表示位置
# 前5秒透明度逐渐增加后来变1 alpha
ffmpeg -i test.mp4 -vf "drawtext=text='水印文本':fontsize=54:fontcolor=red:x=10:y=10:alpha='if(lte(t,5),t/10,1)'" -codec:a copy output.mp4
# 5秒后透明度逐渐小 alpha
ffmpeg -i test.mp4 -vf "drawtext=text='水印文本':fontsize=54:fontcolor=red:x=10:y=10:alpha='if(gte(t,5),10/t,1)'" -codec:a copy output.mp4
# 水印只在前5秒显示 enable
ffmpeg -i test.mp4 -vf "drawtext=text='水印文本':fontsize=54:fontcolor=red:x=10:y=10:enable='lte(t,5)'" -codec:a copy output.mp4
# 文字水印在视频的前5秒内从左上角移动到右下角，然后在剩下的时间内保持静止在右下角
ffmpeg -i test.mp4 -vf "drawtext=text='水印文本':fontsize=54:fontcolor=red:x='if(lt(t\,5)\,20+t*20\,main_w-text_w-20)':y='if(lt(t\,5)\,20+t*20\,main_h-text_h-20)'" -codec:a copy output.mp4
# tw 和 th 是文本宽度和高度
ffmpeg -i test.mp4 -vf "drawtext=text='Hello, World!':fontcolor=white:fontsize=50:x=(w-tw)/2:y=(h-th)/2" -codec:a copy output.mp4


# xfade 交叉动画 用于转场
# 淡入淡出转场
# duration=1:offset=1 加起来不能大于第一个视频，否则切换时没有效果，如果小于则视频会被截取
ffmpeg -i output2.mp4 -i output1.mp4 -filter_complex xfade=transition=fadeblack:duration=0.5:offset=0.5 output.mp4
# zoomin转场，效果是作用于第一个视频
# 要 相同的分辨率帧率实时机等，很重要，否则报错，最好先把两个视频转一边再进行xfade
ffmpeg -i test2.mp4 -r 29 output2.mp4
ffmpeg -i test4.mp4 -r 29 output1.mp4
ffmpeg -i output2.mp4 -i output1.mp4 -filter_complex "[0]settb=AVTB[v0];[1]settb=AVTB[v1];[v0][v1]xfade=transition=zoomin:offset=2:duration=3" output.mp4


# 图片的平移聚焦
# 输出帧数，默认25帧/秒，25*4 代表4秒
# s=1280x80 # 输出视频比例，可以设置和输入图片大小一致,默认是hd720
# zoom+0.002 表示每帧放大的倍数，下面代码是25帧/每秒 * 4秒，共1000帧
# 最终是 0.002*25*4 = 0.2，最终是放大1.2倍
# 更多参数看文档 
# 从左上角放大
ffmpeg -i "../img/test.jpg" -filter_complex "zoompan=z='zoom+0.002':d=25*4:s=300x300" output.gif
# 聚焦中心点
ffmpeg -i "../img/test.jpg" -filter_complex "zoompan=x='iw/2':y='ih/2':z='zoom+0.002':d=25*4:s=300x300" output.gif
# 如果zoom <= 1.0, z=1.5 否则 z= (1.001 和 zoom-0.0015)中大的
# 最终效果就是： 从 1.5 倍数缩小到 1.001
ffmpeg -i "../img/test.jpg" -filter_complex "zoompan=z='if(lte(zoom,1.0),1.5,max(1.001,zoom-0.0015))':d=25*4:s=300x300" output.gif

# 视频放大缩小动画（暂时找不到方法）



# 分片mp4
# 基本转换命令
ffmpeg -i input.mp4 -movflags frag_keyframe+empty_moov -f mp4 output_fragmented.mp4

# 添加关键帧，优化流式播放
ffmpeg -i test.mp4 \
  -movflags frag_keyframe+empty_moov+default_base_moof \
  -g 50 \  # 每50帧一个关键帧
  -f mp4 test_fenpian2.mp4

# 指定片段时长（秒）# 1秒（微秒）
ffmpeg -i test_moovStart.mp4 -movflags frag_keyframe+empty_moov+separate_moof -frag_duration 1000000 -c copy test_fenpian2.mp4

# 批量转换目录下所有视频
for file in *.mp4; do
  ffmpeg -i "$file" -movflags frag_keyframe+empty_moov -c copy "${file%.*}_fragmented.mp4"
done


ffprobe -v quiet -print_format json -show_frames -select_streams v -show_entries frame=key_frame,pkt_pts,pkt_pos,pkt_size test_fenpian2 > frames.json

# 下载https的m3u8(ts文件)以及合成mp4
ffmpeg -i "" -c copy output.mp4
ffmpeg -allowed_extensions ALL -protocol_whitelist "file,http,https,crypto,tcp,tls" -i "1.m3u8" -c copy output.mp4
# 使用用户代理，避免被服务器拒绝
ffmpeg -user_agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -i "" -c copy output.mp4



