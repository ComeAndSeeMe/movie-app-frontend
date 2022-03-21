# movie-app-frontend
路由规划:
(1)	 首页
        <Route path="/homePage/" element={<HomePage />} />
        <Route path="/search/" element={<SearchPage/>}/> 
(2)	通过/movieItem/:id 来从后端获取电影数据 包括：
movieTitle  movieOverview 等数据
        <Route path="/movieItem/:id" element={<MovieItemPage/>}/>
（3）个人中心
        <Route path="/accountSetting/" element={<AccountSettingPage />}/>
        <Route path="/accountSetting/info/" element={<InfoPage/>}/>
        <Route path="/accountSetting/collection/"element={<CollectionPage/>}/>
        <Route path="/accountSetting/list/" element={<ListPage/>}/>
（4）登录/注册 
 注册时：POST user_name user_eamil user_passeord 到数据库
 登陆时：POST 去取 user_name user_password从数据库
        <Route path="/login/" element={<LoginPage/>}/>
        <Route path="/login/singup/" element={<SingUpPage/>}/>
 （5）根据用户id 返回 给用户推荐的Top10电影 在用户homePage当中
 <Route path="/homePage/:id" element={<HomePage />} />
 整个系统首页



