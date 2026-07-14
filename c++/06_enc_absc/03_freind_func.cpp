#include<iostream>
using namespace std;

class Karan{
	private:
		int money = 500;
	public:
		friend void raj(Karan k);
};

void raj(Karan k){
	cout<<"Raj your money :"<<k.money;
}

int main()
{
	
	Karan ob;
	raj(ob);
	return 0;
}
