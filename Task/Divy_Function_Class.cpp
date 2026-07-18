#include<iostream>
using namespace std;

class Raj{
	private:
		int money=50000;
	public:
	    friend class Roshan;	
};

class Roshan : public Raj{
	public:
		void data(Raj r){
			cout<<"Your Money is = "<<r.money;
		}
};
int main()
{
    Raj obc;
    Roshan ge;
    ge.data(obc);
    
	return 0;
} 
