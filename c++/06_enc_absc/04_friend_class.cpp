#include<iostream>
using namespace std;

class Karan{
	private:
		int money = 500;
	public:
		friend class Raj;
};
class Raj : public Karan{
	public:
		void data(Karan k){
			cout<<"Raj your  money : "<<k.money;
		}
};


int main()
{
	
	Karan ob;
	Raj user;
	user.data(ob);
	
	return 0;
}
